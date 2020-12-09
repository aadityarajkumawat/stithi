import React, { Fragment } from 'react'
import { useHighContext } from 'stithi'

interface AuthProps {}

const Auth: React.FC<AuthProps> = ({}) => {
  const auth = useHighContext<any>('auth')
  console.log(auth)
  return (
    <Fragment>
      <div>{auth.isAuth ? 'user-auth' : 'user-unauth'}</div>
      <button
        onClick={() => {
          if (auth.isAuth) {
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
export default Auth
