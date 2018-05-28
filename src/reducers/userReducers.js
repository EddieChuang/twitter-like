"use strict"

export function userReducers(state={status:0, message:''}, action){

  console.log('userReducers', action)
  switch(action.type){
    case 'SIGNUP':
      return { status: action.payload.status, message: action.payload.data.message }
    case 'SIGNUP_ERROR':  
      return { status: action.payload.status, message: action.payload.data.message }
    case 'SIGNIN':
      return {}
    case 'SIGNIN_ERROR':
      return {}
  }


  return state
}