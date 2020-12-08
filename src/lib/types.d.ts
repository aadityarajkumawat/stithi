declare namespace Stithi {
  type ReducerFunction<T, K> = (state: T, action: K) => T

  type UseStonedReducerI<T, K> = [T, React.Dispatch<K>]

  type useStonedReducer<T, K> = (
    reducer: Stithi.ReducerFunction<T, K>,
    initialState: T
  ) => Stithi.UseStonedReducerI<T, K>
}
