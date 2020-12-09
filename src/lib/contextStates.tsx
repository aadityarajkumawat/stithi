import React from 'react'
import { useReducer } from 'react'
import { getHighContextObject } from './getHighContextObject'
import { store } from './store'

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
export function createContextState<P, S, A, K>(
  contextName: string,
  reducer: Stithi.ReducerFunction<S, A>,
  actions: K | null
) {
  const NewContextState: React.FC<P> = ({ children }) => {
    const { initialState, context } = getHighContextObject<S>(contextName)
    const [state, dispatch] = useReducer<typeof reducer, typeof initialState>(
      reducer,
      initialState,
      (initialState) => initialState
    )

    if (!store.isReady) {
      store.isReady = true
      store.dispatch = (param: any) => dispatch(param)
      Object.freeze(store)
    }

    // getDispatch(dispatch)
    // console.log('from inside', thisAryy)
    const NewContext = context
    return (
      <NewContext.Provider
        value={
          actions
            ? {
                ...state,
                ...actions
              }
            : { ...state }
        }
      >
        {children}
      </NewContext.Provider>
    )
  }

  contextStates.push(NewContextState)
}
