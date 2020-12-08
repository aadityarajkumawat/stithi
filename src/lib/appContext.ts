import { AuthStateI } from './AuthState'
import { createNewContext } from './createNewContext'

interface AuthContextI extends AuthStateI {
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
}
