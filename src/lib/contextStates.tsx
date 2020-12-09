import React from 'react'
import { useReducer } from 'react'
import { getActions } from './AuthState'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import { getHighContextObject } from './getHighContextObject'

export const contextStates: Array<any> = []

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
  reducer: Stithi.ReducerFunction<S, A>
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

  contextStates.push(NewContextState)
}
