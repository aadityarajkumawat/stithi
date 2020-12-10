import React from 'react'
import { useReducer } from 'react'
import { getHighContextObject } from './getHighContextObject'

interface ContextStateObjectType {
  newContextState: React.FC<any>
  contextStateName: string
}

export const contextStates: Array<ContextStateObjectType> = []

/**
 * Creates a context and adds it to an array
 * of contexts which can be accessed in component
 * tree of application
 * @param contextName string
 * @param reducer (state, action) - returns state
 * @param actions Object containing actions
 * @generics P: React Props, A: Action Types, S: State
 */
export function createContextState<P, S, A>(
  contextName: string,
  reducer: Stithi.ReducerFunction<S, A>,
  getActions: (dispatch: React.Dispatch<A>) => object
) {
  const NewContextState: React.FC<P> = ({ children }) => {
    const { initialState, context } = getHighContextObject<S>(contextName)
    const [state, dispatch] = useReducer<typeof reducer, typeof initialState>(
      reducer,
      initialState,
      (initialState) => initialState
    )

    const actions = getActions(dispatch)

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

  contextStates.push({
    newContextState: NewContextState,
    contextStateName: contextName
  })
}
