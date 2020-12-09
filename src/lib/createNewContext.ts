import { createContext } from 'react'

export interface ContextParams<Y> {
  initialState: Y
  contextName: string
}

export interface ContextInfo<Y> extends ContextParams<Y> {
  context: React.Context<Y>
}

/**
 * Initial State can be of any type in context info
 * it may be simply a string | number | array | object
 */
export const newContextInfoContainer: Array<ContextInfo<any>> = []

/**
 * Takes initial state to create context
 * and name of context for unique identification
 * @param contextParams
 */
export function createNewContext<Y>(contextParams: ContextParams<Y>) {
  const newContext = createContext<Y | undefined>(undefined)
  newContextInfoContainer.push({
    context: newContext,
    ...contextParams
  })
}
