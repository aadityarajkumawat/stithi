import { AuthActionType, AuthStateI, reducer } from './AuthState'
import { createContextState } from './contextStates'
import { createNewContext } from './createNewContext'

export const initializeContext = () => {
  createNewContext<AuthStateI>({
    contextName: 'auth',
    initialState: {
      isAuthenticated: false
    }
  })
}

export const createCC = () => {
  createContextState<any, AuthStateI, AuthActionType>('auth', reducer)
}
