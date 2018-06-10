"use strict"
import tweet from '../utils/tweet'

export function modalReducers(state={visibility: false, tweet: []}, action){

  switch(action.type){
    case 'SHOW_MODAL':
      return {...state, visibility: true}
    case 'CLOSE_MODAL':
      return { ...state, visibility: false}
    case 'NEW_POST':
      return {visibility: false, tweet: action.payload.tweet}
    case 'FAIL_POST':
      return {...state, visibility: true}
  }


  return state
}