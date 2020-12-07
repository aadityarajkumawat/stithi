import { createContext } from 'react'

interface ContextParams<T> {
  initialState: T
  contextName: string
}

interface ContextInfo<T> extends ContextParams<T> {
  context: React.Context<T>
}

/**
 * Initial State can be of any type in context info
 * it may be simply a string | number | array | object
 */
export const newContextInfoContainer: Array<ContextInfo<any>> = []

/**
 * takes initial state to create context
 * and name of context for unique identification
 * @param contextParams
 */
export function createNewContext<T>(contextParams: ContextParams<T>) {
  const newContext = createContext<T>(contextParams.initialState)
  newContextInfoContainer.push({ context: newContext, ...contextParams })
}
