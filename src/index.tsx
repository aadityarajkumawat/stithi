import React, { useContext } from 'react'
import AuthContext from './lib/AuthContext'
// import { initializeContext } from './lib/appContext'
// import AuthContext from './lib/AuthContext'
import { AuthState } from './lib/AuthState'
// import { newContextInfoContainer } from './lib/createNewContext'
// import { AuthState } from './lib/AuthState'
// import { newContextInfoContainer } from './lib/createNewContext'
interface Props {}

// initializeContext()
const AuthComponent: React.FC<any> = () => {
  const auth = useContext(AuthContext)
  const { isAuthenticated, login, logout } = auth
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
