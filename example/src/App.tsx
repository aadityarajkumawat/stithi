import React from 'react'
import { getContextState } from 'stithi'
import Auth from './components/Auth'

const App = () => {
  const AuthState = getContextState('auth')
  return (
    <AuthState>
      <div>
        <div>Navbar</div>
        <Auth />
      </div>
    </AuthState>
  )
}

export default App
