import { createContext } from 'react'

export interface AuthContextParams {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextParams>({
  isAuthenticated: false,
  login: () => console.warn('login context'),
  logout: () => console.warn('logout context')
})

export default AuthContext
