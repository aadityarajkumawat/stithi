import React, { useReducer } from 'react'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import AuthContext from './AuthContext'

interface AuthStateProps {}

interface AuthStateI {
  isAuthenticated: boolean
}

export const AuthState: React.FC<AuthStateProps> = ({ children }) => {
  const init: AuthStateI = {
    isAuthenticated: true
  }
  const [state, dispatch] = useReducer<
    Stithi.ReducerFunction<AuthStateI>,
    AuthStateI
  >(
    (state: any, action: any) => {
      switch (action.type) {
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false
          }
        case 'LOGIN':
          return {
            ...state,
            isAuthenticated: true
          }
        default:
          return state
      }
    },
    init,
    (init) => init
  )

  // const Provider = newContextInfoContainer[0].context.Provider

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
