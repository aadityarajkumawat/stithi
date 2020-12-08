import { AuthActionType, AuthStateI, getActions, reducer } from './AuthState'
import { createContextState } from './contextStates'
import { createNewContext } from './createNewContext'
import { getDispatch } from './executeReducerShii'
import { getHighContextObject } from './getHighContextObject'

export interface AuthContextI extends AuthStateI {
  login: () => void
  logout: () => void
}

export const initializeContext = () => {
  createNewContext<AuthStateI, AuthContextI>({
    contextName: 'auth',
    initialState: {
      isAuthenticated: false
    },
    contextState: {
      isAuthenticated: false,
      login: () => null,
      logout: () => null
    }
  })

  const dispatch = getDispatch<AuthStateI, AuthActionType>(
    reducer,
    getHighContextObject('auth').initialState
  )

  createContextState<AuthStateI, AuthActionType>({
    contextName: 'auth',
    reducer: reducer,
    actions: getActions(dispatch)
  })
}
