"use strict"
import axios from 'axios'

export function signup(user){
  // user = {'email': email, 'name': name, 'password': password}
  return (dispatch) => {

    axios.post('/signup', user)
      .then((res) => {
        // console.log(res)
        dispatch({type: "SIGNUP", payload: res})
      })
      .catch((err) => {
        dispatch({type: "SIGNUP_ERROR", payload: err.response})
      })

  }
}


export function signin(user){
  // user = {'email': email, 'password': password}
  return (dispatch) => {

    axios.post('/signin', user)
      .then((res) => {
        console.log('signin res', res)
        dispatch({type: "SIGNIN", payload: res})
      })
      .catch((err) => {
        console.log('signin err', err.response)
        dispatch({type: "SIGNIN_ERROR", payload: err.response})
      })
  }
}