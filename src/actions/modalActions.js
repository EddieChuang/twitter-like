"use strict"

export function show(){
  return (dispatch) => {
    dispatch({type: "SHOW_MODAL"})
  }
}

export function close(){
  return (dispatch) => {
    dispatch({type: "CLOSE_MODAL"})
  }
}

export function newPost(text){

  return (dispatch) => {
    let tweet = {owner: sessionStorage_id, content: text}
    dispatch({type: "NEW_POST", payload: {tweet}})
  }
}
