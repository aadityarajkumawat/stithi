import { useStonedReducer } from './useStonedReducer'

export function getDispatch<T, K>(reducer: any, initialState: any) {
  const [_, dispatch] = useStonedReducer<T, K>(reducer, initialState)
  return dispatch
}
