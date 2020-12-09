import { createContextState } from './contextStates'
import { createNewContext } from './createNewContext'

/**
 * Initialize your context with its unique name and its initial state
 * @param contextName Name that you will refering your context with
 * @param initialState Initialise your context with its initial State
 */
export function initializeContext<T>(contextName: string, initialState: T) {
  createNewContext<T>({
    contextName,
    initialState
  })
}

/**
 * This is to be called after initializeContext of respective context
 * is called, this creates the ContextState Provider, in which the required
 * part of component tree is wrapped to access its context state.
 *
 * Context state can be accessed by the useHighContext hook which returns
 * all the required state variables and functions
 *
 * @param contextName Name that you will refering your context with
 *
 * @param reducer A reducer function which will take state and action
 * as parameters and return the required state depending on action type
 *
 * @param getActions A function which takes dispatch as a parameter and
 * contains action functions dispatching actions and finally returning
 * an object of all the actions being declared
 */
export function createContextProvider<P, S, A>(
  contextName: string,
  reducer: Stithi.ReducerFunction<S, A>,
  getActions: (dispatch: React.Dispatch<A>) => object
) {
  createContextState<P, S, A>(contextName, reducer, getActions)
}
