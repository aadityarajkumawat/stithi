import React from 'react'
import { getContextState } from 'stithi'
import Auth from './components/Auth'
import Tweet from './components/Tweet'

const App = () => {
  const AuthState = getContextState('auth')
  const TweetState = getContextState('tweet')
  return (
    <AuthState>
      <TweetState>
        <div>
          <div>Navbar</div>
          <Auth />
          <Tweet />
        </div>
      </TweetState>
    </AuthState>
  )
}

export default App
