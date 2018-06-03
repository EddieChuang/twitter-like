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