"use strict"
import tweet from '../utils/tweet'

export function modalReducers(state={visibility: false}, action){

  switch(action.type){
    case 'SHOW_MODAL':
      return {visibility: true}
    case 'CLOSE_MODAL':
      return {visibility: false}
    case 'NEW_POST':
      return {visibility: false, tweet: action.payload.tweet}
    case 'FAIL_POST':
      return {visibility: true}
  }


  return state
}