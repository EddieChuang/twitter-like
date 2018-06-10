"use strict"

export function userReducers(state={status:0, user:null, message:''}, action){

  switch(action.type){
    case 'SIGNUP':
      return { status: action.payload.status, user: action.payload.data.user, message: '' }
    case 'SIGNUP_ERROR':  
      return { status: action.payload.status, user: null, message: action.payload.data.message }
    case 'SIGNIN':
      return { status: action.payload.status, user: action.payload.data.user, message: '' }
    case 'SIGNIN_ERROR':
      return { status: action.payload.status, user: null, message: action.payload.data.message }
    case 'FOLLOW':
      return { userToFollow: action.payload.userToFollow }
    case 'UNFOLLOW':
      return { userToFollow: action.payload.userToFollow }
  }


  return state
}