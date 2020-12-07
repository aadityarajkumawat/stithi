import { createNewContext } from './createNewContext'

export interface AuthContextParams {
  isAuthenticated: boolean
}

export const appContext = {
  auth: {
    context: createNewContext<AuthContextParams>({
      contextName: 'auth',
      initialState: { isAuthenticated: false }
    })
  }
}
