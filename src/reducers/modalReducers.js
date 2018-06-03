"use strict"

export function modalReducers(state={visibility: false}, action){

  switch(action.type){
    case 'SHOW_MODAL':
      return {visibility: true}
    case 'CLOSE_MODAL':
      return {visibility: false}
  }


  return state
}