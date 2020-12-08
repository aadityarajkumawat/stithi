import { createContext } from 'react'

export interface AuthContextParams {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextParams>({
  isAuthenticated: false,
  login: () => null,
  logout: () => null
})

export default AuthContext
