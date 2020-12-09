import {
  createContextProvider,
  dispatcherOnSteroids,
  initializeContext
} from 'stithi'

export interface AuthStateI {
  isAuth: boolean
}

export interface TweetStateI {
  isShown: boolean
}

export type AuthActionTypes = { type: 'LOGIN' } | { type: 'LOGOUT' }
export type TweetActionTypes = { type: 'SHOW_TWEET' } | { type: 'HIDE_TWEET' }

const getAuthAction = (dispatch: React.Dispatch<AuthActionTypes>) => {
  const login = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGIN' })
  }

  const logout = () => {
    dispatcherOnSteroids(dispatch, { type: 'LOGOUT' })
  }

  return { login, logout }
}

const getTweetAction = (dispatch: React.Dispatch<TweetActionTypes>) => {
  const showTweet = () => {
    dispatcherOnSteroids(dispatch, { type: 'SHOW_TWEET' })
  }

  const hideTweet = () => {
    dispatcherOnSteroids(dispatch, { type: 'HIDE_TWEET' })
  }

  return { showTweet, hideTweet }
}

export const doAllContextWork = () => {
  initializeContext<AuthStateI>('auth', { isAuth: false })
  createContextProvider<any, AuthStateI, AuthActionTypes>(
    'auth',
    (state: any, action: any) => {
      switch (action.type) {
        case 'LOGIN':
          return {
            ...state,
            isAuth: true
          }
        case 'LOGOUT':
          return {
            ...state,
            isAuth: false
          }
        default:
          return state
      }
    },
    getAuthAction
  )

  initializeContext<TweetStateI>('tweet', { isShown: true })
  createContextProvider<any, any, any>(
    'tweet',
    (state: any, action: any) => {
      switch (action.type) {
        case 'SHOW_TWEET':
          return {
            ...state,
            isShown: true
          }
        case 'HIDE_TWEET':
          return {
            ...state,
            isShown: false
          }
        default:
          return state
      }
    },
    getTweetAction
  )
}
