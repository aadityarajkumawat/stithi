export type ReducerFn<S, A> = (state: S, action: A) => S
export { createContextProvider, initializeContext } from './lib/appContext'
export { dispatcherOnSteroids } from './lib/dispatcherOnSteroids'
export { getContextState } from './lib/getHighContextState'
export { useHighContext } from './lib/useHighContext'
