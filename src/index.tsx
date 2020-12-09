import React from 'react'
import { createCC, initializeContext } from './lib/appContext'
import { useAuth } from './lib/AuthState'
import { contextStates } from './lib/contextStates'

interface Props {}

initializeContext()
createCC()
const AuthState = contextStates[0]

const AuthComponent: React.FC<any> = () => {
  const { isAuthenticated, login, logout } = useAuth<any>()
  console.log(useAuth<any>())
  // auth.login()

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
  console.log(AuthState)
  return (
    <AuthState>
      <div>
        <div>Navbar</div>
        <AuthComponent />
      </div>
    </AuthState>
  )
}
