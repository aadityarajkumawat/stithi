# Stithi

> A react library to manage state

[![NPM](https://img.shields.io/npm/v/stithi.svg)](https://www.npmjs.com/package/stithi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install stithi
or
yarn add stithi
```

## Usage

#Setup

```
**Project Structure**

- /src
	- stithi
		- /actions
			- authAction.ts
		- /reducers
			- authReducer.ts
		- callContext.ts
		- actionTypes.ts
		- stateTypes.ts

```

> In src/stithi/callContext.ts

```ts
import { initializeContext, createContextProvider } from 'stithi'
import { AuthStateI } from './stateTypes'
import { AuthActionTypes } from './reducers/authReducer'

const contextNames = {
  auth: 'auth'
}

export const callContext = () => {
  //takes a unique name for referencing a particular context and initial state
  initializeContext<AuthStateI>(contextNames.auth, { isAuthenticated: false })
  //
  createContextProvider<any, AuthStateI, AuthActionTypes>(
    contextNames.auth,
    reducer,
    getAuthActions
  )
}
```

> In src/stithi/stateTypes.ts

```ts
export interface AuthStateI {
  isAuthenticated: boolean
}
```

> In src/stithi/actionTypes.ts

```ts
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
```

> In src/stithi/reducers/authReducer.ts

```ts
import { LOGIN, LOGOUT } from '../actionTypes'
import { AuthStateI } from '../stateTypes'

export type AuthActionTypes = { type: typeof LOGIN } | { type: typeof LOGOUT }

export const authReducer = (state: AuthStateI, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: false
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: true
      }
    default:
      return state
  }
}
```

> In src/index.tsx

```tsx
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { callContext } from './stithi/callContext'

callContext()

ReactDOM.render(<App />, document.getElementById('root'))
```

> In src/App.tsx

```ts
import React from 'react'
import { getContextState } from 'stithi'
import { contextNames } from './stithi/callContext'
import Auth from './components/Auth'

const App = () => {
  const AuthState = getContextState(contextNames.auth)
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
```

> In src/components/Auth.tsx

```tsx
import React, { Fragment } from 'react'
import { useHighContext } from 'stithi'

interface AuthProps {}

interface AuthContextProps {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const Auth: React.FC<AuthProps> = ({}) => {
  const auth = useHighContext<AuthContextProps>(contextNames.auth)
  return (
    <Fragment>
      <div>
        {auth.isAuthenticated ? 'user: Authenticated' : 'user: Unauthenticated'}
      </div>
      <button
        onClick={() => {
          if (auth.isAuthenticated) {
            auth.logout()
          } else {
            auth.login()
          }
        }}
      >
        login/logout
      </button>
    </Fragment>
  )
}
```

## License

MIT © [aadityarajkumawat](https://github.com/aadityarajkumawat)
