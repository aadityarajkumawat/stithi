import React, { useContext } from 'react'
import { initializeContext } from './lib/appContext'
import { AuthState } from './lib/AuthState'
import { newContextInfoContainer } from './lib/createNewContext'

interface Props {}

initializeContext()

const AuthComponent: React.FC<any> = () => {
  const auth = useContext(newContextInfoContainer[0].context)
  const { isAuthenticated, login, logout } = auth
  console.log(auth)
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
