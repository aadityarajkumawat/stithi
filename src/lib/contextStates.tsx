import { AuthActionType, AuthStateI } from './AuthState'
import { newContextInfoContainer } from './createNewContext'
import { dispatcherOnSteroids } from './dispatcherOnSteroids'
import { useStonedReducer } from './useStonedReducer'

export const contextStates: Array<React.Context<any>> = []

interface CreateContextStateI {
  children: React.ReactNode
  contextName: string
}

export function createContextState<T>({
  children,
  contextName
}: CreateContextStateI) {
  // const AuthState: React.FC<T> = ({ children }) => {
  //   const init = newContextInfoContainer[0].initialState
  //   const [state, dispatch] = useStonedReducer<AuthStateI, AuthActionType>(
  //     (state: AuthStateI, action: any) => {
  //       switch (action.type) {
  //         case 'LOGOUT':
  //           return {
  //             ...state,
  //             isAuthenticated: false
  //           }
  //         case 'LOGIN':
  //           return {
  //             ...state,
  //             isAuthenticated: true
  //           }
  //         default:
  //           return state
  //       }
  //     },
  //     init
  //   )
  //   console.log({ state })
  //   const logout = () => {
  //     dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  //   }
  //   const login = () => {
  //     dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  //   }
  //   const AuthContext = newContextInfoContainer[0].context
  //   return (
  //     <AuthContext.Provider
  //       value={{
  //         isAuthenticated: state.isAuthenticated,
  //         login,
  //         logout
  //       }}
  //     >
  //       {children}
  //     </AuthContext.Provider>
  //   )
  // }
}
