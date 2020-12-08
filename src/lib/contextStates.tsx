declare var React: any
import { useReducer } from 'react'
import { getHighContextObject } from './getHighContextObject'
import { useStonedReducer } from './useStonedReducer'

export const contextStates: Array<any> = []

interface CreateContextStateI<T> {
  contextName: string
  reducer: T
  actions: object
}
/**
 * Creates a context and adds it to an array
 * of contexts which can be accessed in component
 * tree of application
 * @param param0
 */
export function createContextState<T, K>({
  contextName,
  reducer,
  actions
}: CreateContextStateI<Stithi.ReducerFunction<T, K>>) {
  const NewContextState: React.FC<any> = ({ children }) => {
    const { initialState, context } = getHighContextObject(contextName)
    const [state] = useReducer<Stithi.ReducerFunction<any, any>, any>(
      reducer,
      initialState,
      (initialState) => initialState
    )
    const NewContext = context
    return (
      <NewContext.Provider
        value={{
          ...state,
          ...actions
        }}
      >
        {children}
      </NewContext.Provider>
    )
  }

  contextStates.push(NewContextState)
}
