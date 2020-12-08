export interface DispatchParams {
  type: string
  payload?: any
}

export function dispatcherOnSteroids(
  dispatchFunction: React.Dispatch<DispatchParams>,
  dispatchParams: DispatchParams
) {
  dispatchFunction(dispatchParams)
}
