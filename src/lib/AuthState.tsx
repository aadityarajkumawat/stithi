import React, { useReducer } from 'react'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import { newContextInfoContainer } from './createNewContext'

interface AuthStateProps {}

export interface AuthStateI {
  isAuthenticated: boolean
}

export const AuthState: React.FC<AuthStateProps> = ({ children }) => {
  const init = newContextInfoContainer[0].initialState
  const [state, dispatch] = useReducer<
    Stithi.ReducerFunction<AuthStateI>,
    AuthStateI
  >(
    (state: AuthStateI, action: any) => {
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

  console.log({ state })

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }
  const AuthContext = newContextInfoContainer[0].context

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
