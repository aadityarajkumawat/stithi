import { createContext } from 'react'

export interface ContextParams<T, Y> {
  initialState: T
  contextName: string
  contextState: Y
}

export interface ContextInfo<T, Y> extends ContextParams<T, Y> {
  context: React.Context<Y>
}

/**
 * Initial State can be of any type in context info
 * it may be simply a string | number | array | object
 */
export const newContextInfoContainer: Array<ContextInfo<any, any>> = []

/**
 * Takes initial state to create context
 * and name of context for unique identification
 * @param contextParams
 */
export function createNewContext<T, Y>(contextParams: ContextParams<T, Y>) {
  const newContext = createContext<Y>(contextParams.contextState)
  newContextInfoContainer.push({
    context: newContext,
    ...contextParams
  })
}
