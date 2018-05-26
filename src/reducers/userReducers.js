"use strict"

export function userReducers(state={message:''}, action){

  console.log('userReducers', action)
  switch(action.type){
    case 'SIGNUP':
      return { status: 200, message: action.payload.message}
    case 'SIGNUP_ERROR':  
      return { status: 500, message: action.payload.message}
  }


  return state
}