import React, { useReducer } from 'react'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import AuthContext from './AuthContext'

interface AuthStateProps {}

export const AuthState: React.FC<AuthStateProps> = ({ children }) => {
  const init = {
    isAuthenticated: true
  }
  const [state, dispatch] = useReducer<any>((state: any, action: any) => {
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
  }, init) as any

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
