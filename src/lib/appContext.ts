import { AuthActionType, AuthStateI, getActions, reducer } from './AuthState'
import { createContextState } from './contextStates'
import { createNewContext } from './createNewContext'
import { store } from './store'

export const initializeContext = () => {
  createNewContext<AuthStateI>({
    contextName: 'auth',
    initialState: {
      isAuthenticated: false
    }
  })
}

export const createCC = () => {
  createContextState<any, AuthStateI, AuthActionType, any>(
    'auth',
    reducer,
    getActions(store.dispatch)
  )

  store.dispatch({ type: 'LOGIN' })
}
