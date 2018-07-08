'use strict'
import axios from 'axios'
import { auth } from '../utils/auth'

export function signup(user) {
  // user = {'email': email, 'name': name, 'password': password}
  return dispatch => {
    axios
      .post('/user/signup', user)
      .then(res => {
        console.log('signup', res)
        sessionStorage._id = res.data.user._id
        dispatch({ type: 'SIGNUP', payload: res })
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', payload: err.response })
      })
  }
}

export function signin(user) {
  // user = {'email': email, 'password': password}
  return dispatch => {
    axios
      .post('/user/signin', user)
      .then(res => {
        console.log('signin res', res)
        sessionStorage._id = res.data.user._id
        dispatch({ type: 'SIGNIN', payload: res })
      })
      .catch(err => {
        console.log('signin err', err.response)
        dispatch({ type: 'SIGNIN_ERROR', payload: err.response })
      })
  }
}

export function logout() {
  return dispatch => {
    axios
      .get('/user/logout')
      .then(res => {
        console.log('logout res', res)
        delete sessionStorage._id
        dispatch({ type: 'LOGOUT', payload: res })
      })
      .then(err => {
        console.log('logout err', err.response)
      })
  }
}

export function follow(idToFollow) {
  return dispatch => {
    let params = { id: sessionStorage._id, idToFollow }
    axios
      .post('/user/follow', params)
      .then(res => {
        console.log('follow res', res)
        dispatch({ type: 'FOLLOW', payload: res.data })
      })
      .catch(err => {
        console.log('follow err', err.response)
      })
  }
}
