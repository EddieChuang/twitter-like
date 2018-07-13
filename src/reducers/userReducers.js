'use strict'

export function userReducers(
  state = { success: null, user: null, message: '' },
  action
) {
  switch (action.type) {
    case 'SIGNUP':
      return {
        success: action.payload.success,
        user: action.payload.user,
        message: ''
      }
    case 'SIGNUP_ERROR':
      return {
        success: action.payload.success,
        user: null,
        message: action.payload.message
      }
    case 'SIGNIN':
      return {
        success: action.payload.success,
        user: action.payload.user,
        message: ''
      }
    case 'SIGNIN_ERROR':
      return {
        success: action.payload.success,
        user: null,
        message: action.payload.message
      }
    // case 'LOGOUT':
    // return {}
    // case 'LOGOUT_ERROR':
    //   return { success: action.payload.success, user: null, message: action.payload.data.message }
    case 'FOLLOW':
      return { user: action.payload.userToFollow }
    case 'UNFOLLOW':
      return { user: action.payload.userToFollow }
  }

  return state
}
