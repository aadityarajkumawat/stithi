import React, { useReducer } from 'react'
import { AuthContextParams } from './appContext'
import { newContextInfoContainer } from './createNewContext'

interface AuthStateProps {}

const AuthState: React.FC<AuthStateProps> = ({}) => {
  const [state, dispatch] = useReducer<
    Stithi.ReducerFunction<AuthContextParams>
  >((state, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false
        }
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true
        }
      default:
        return state
    }
  }, newContextInfoContainer[0].initialState)
  const Provider = newContextInfoContainer[0].context.Provider
  return (
    <Provider value={{ isAuthenticated: state.isAuthenticated }}></Provider>
  )
}
export default AuthState
