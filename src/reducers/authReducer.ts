export type AuthActionType = { type: 'LOGOUT' } | { type: 'LOGIN' }

export interface AuthStateI {
  isAuthenticated: boolean
}
export const reducer: Stithi.ReducerFunction<AuthStateI, AuthActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true
      }
    case 'LOGOUT':
      return {
        isAuthenticated: false
      }
    default:
      return state
  }
}
