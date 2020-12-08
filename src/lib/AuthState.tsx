import React, { useContext } from 'react'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import { getHighContextObject } from './getHighContextObject'
import { getDispatch } from './executeReducerShii'

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

export const getActions = (dispatch: React.Dispatch<AuthActionType>): any => {
  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  return { login, logout }
}


export function useAuth<Y>() {
  const auth = useContext<Y>(getHighContextObject('auth').context)
  return { ...auth }
}
