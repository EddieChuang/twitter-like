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
      return {user: action.payload.user}
    case 'UNFOLLOW':
      return {user: action.payload.user}
  }


  return state
}