"use strict"
import axios from 'axios'

export function signup(user){

  return (dispatch) => {

    axios.post('/api/signup', user)
      .then((res) => {
        console.log(res)
        dispatch({type:"SIGNUP", payload: res.message})
      })
      .catch((err) => {
        dispatch({type:"SIGNUP_ERROR", payload: res.message})
      })

  }
}