export function dispatcherOnSteroids<A>(
  dispatchFunction: React.Dispatch<A>,
  dispatchParams: A
) {
  dispatchFunction(dispatchParams)
}
