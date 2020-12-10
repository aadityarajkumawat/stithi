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
	- /actions
		- authAction.ts
	- /reducers
		- authReducer.ts
	- callContext.ts
	- actionTypes.ts
	- stateTypes.ts

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
