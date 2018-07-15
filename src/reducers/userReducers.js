'use strict'

export function userReducers(
  state = {
    success: null,
    user: null,
    message: '',
    userToUnFollow: null,
    userToFollow: null
  },
  action
) {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
        message: ''
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        success: action.payload.success,
        user: null,
        message: action.payload.message
      }
    case 'SIGNIN':
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
        message: ''
      }
    case 'SIGNIN_ERROR':
      return {
        ...state,
        success: action.payload.success,
        user: null,
        message: action.payload.message
      }
    // case 'LOGOUT':
    // return {}
    // case 'LOGOUT_ERROR':
    //   return { success: action.payload.success, user: null, message: action.payload.data.message }
    case 'FOLLOW':
      return {
        ...state,
        userToFollow: action.payload.userToFollow,
        userToUnFollow: null
      }
    case 'UNFOLLOW':
      return {
        ...state,
        userToFollow: null,
        userToUnFollow: action.payload.userToUnFollow
      }
  }

  return state
}
