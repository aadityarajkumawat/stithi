import React from 'react'
import { AuthContextI, initializeContext } from './lib/appContext'
import { useAuth } from './lib/AuthState'
import { contextStates } from './lib/contextStates'

interface Props {}

initializeContext()

const AuthComponent: React.FC<any> = () => {
  // const { isAuthenticated, login, logout } = useAuth<AuthContextI>()
  // console.log(isAuthenticated)
  console.log(contextStates)

  return (
    <div>
      {/* {isAuthenticated ? 'user-auth' : 'user-unauth'}
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
      </button> */}
    </div>
  )
}

export const Free: React.FC<Props> = () => {
  return (
    <div>
      <div>Navbar</div>
      <AuthComponent />
    </div>
  )
}
