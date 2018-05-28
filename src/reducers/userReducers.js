"use strict"

export function userReducers(state={status:0, message:''}, action){

  switch(action.type){
    case 'SIGNUP':
      return { status: action.payload.status, user: action.payload.data.user, message: null }
    case 'SIGNUP_ERROR':  
      return { status: action.payload.status, user: null, message: action.payload.data.message }
    case 'SIGNIN':
      return { status: action.payload.status, user: action.payload.data.user, message: null }
    case 'SIGNIN_ERROR':
      return { status: action.payload.status, user: null, message: action.payload.data.message }
  }


  return state
}