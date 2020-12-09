import {
  createContextProvider,
  dispatcherOnSteroids,
  initializeContext
} from 'stithi'

export interface AuthStateI {
  isAuth: boolean
}

export type AuthActionTypes = { type: 'LOGIN' } | { type: 'LOGOUT' }

const getAuthAction = (dispatch: React.Dispatch<AuthStateI>) => {
  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  return { login, logout }
}

export const doAllContextWork = () => {
  initializeContext<AuthStateI>('auth', { isAuth: false })
  createContextProvider<any, any, any>(
    'auth',
    (state: any, action: any) => {
      switch (action.type) {
        case 'LOGIN':
          return {
            ...state,
            isAuth: true
          }
        case 'LOGOUT':
          return {
            ...state,
            isAuth: false
          }
        default:
          return state
      }
    },
    getAuthAction
  )
}
