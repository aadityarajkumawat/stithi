import React from 'react'
import { AuthContextI, initializeContext } from './lib/appContext'
import { AuthState, useAuth } from './lib/AuthState'

interface Props {}

initializeContext()

const AuthComponent: React.FC<any> = () => {
  const { isAuthenticated, login, logout } = useAuth<AuthContextI>()
  console.log(isAuthenticated)
  return (
    <div>
      {isAuthenticated ? 'user-auth' : 'user-unauth'}
      <button
        onClick={() => {
          if (isAuthenticated) {
            logout()
          } else {
            login()
          }
        }}
      >
        login/logout
      </button>
    </div>
  )
}

export const Free: React.FC<Props> = () => {
  return (
    <AuthState>
      <div>Navbar</div>
      <AuthComponent />
    </AuthState>
  )
}
