import React, { useContext } from 'react'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import { newContextInfoContainer } from './createNewContext'
import { useStonedReducer } from './useStonedReducer'
import { getHighContextObject } from './getHighContextObject'

interface AuthStateProps {}

export interface AuthStateI {
  isAuthenticated: boolean
}

export type AuthActionType = { type: 'LOGOUT' } | { type: 'LOGIN' }

export const AuthState: React.FC<AuthStateProps> = ({ children }) => {
  const { initialState, context } = getHighContextObject('auth')
  const [state, dispatch] = useStonedReducer<AuthStateI, AuthActionType>(
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
    initialState
  )

  console.log({ state })

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }

  const AuthContext = context

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

export function useAuth<Y>() {
  const auth = useContext<Y>(newContextInfoContainer[0].context)
  return { ...auth }
}
