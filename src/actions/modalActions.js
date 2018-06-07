"use strict"
import axios from 'axios'
import tweet from '../utils/tweet'

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
    let tweet = {owner: sessionStorage._id, content: text}
    return axios.post('/tweet/save', tweet)
      .then((res) => {
        dispatch({type: "NEW_POST", payload: {tweet: JSON.parse(res.data.tweet)}})
      })
      .catch((err) => {
        alert('fail')
        dispatch({type: "FAIL_POST"})
      })
  }
}
