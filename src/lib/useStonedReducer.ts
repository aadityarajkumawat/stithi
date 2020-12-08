import { useReducer } from 'react'
/**
 * Takes a reducer function and initial state as
 * argument to return an array of current state
 * and a functions to dispatch actions
 * @param reducer
 * @param initialState
 */
export function useStonedReducer<K, T>(
  reducer: Stithi.ReducerFunction<K, T>,
  initialState: K
): Stithi.UseStonedReducerI<K, T> {
  const [state, dispatch] = useReducer<Stithi.ReducerFunction<K, T>, K>(
    reducer,
    initialState,
    (initialState) => initialState
  )

  return [state, dispatch]
}
