"use strict"

export function modalReducers(state={visibility: false}, action){

  switch(action.type){
    case 'SHOW_MODAL':
      return {...state, visibility: true}
    case 'CLOSE_MODAL':
      console.log('CLOSE_MODAL')
      return { ...state, visibility: false}
    
  }


  return state
}