export function dispatcherOnSteroids<P = {}>(
  dispatchFunction: React.Dispatch<P>,
  dispatchParams: P
) {
  dispatchFunction(dispatchParams)
}
