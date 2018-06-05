"use strict"
import {tweet} from '../utils/tweet'

export function modalReducers(state={visibility: false}, action){

  switch(action.type){
    case 'SHOW_MODAL':
      return {visibility: true}
    case 'CLOSE_MODAL':
      return {visibility: false}
    case 'NEW_POST':
      tweet.save(action.payload.tweet, (success, tweet) => {
        if(success){
          return {visibility: false, tweet}
        } else {
          alert("fail")
          return {visibility: true, tweet: null}
        }
      })
      // return {visibility: false}
  }


  return state
}