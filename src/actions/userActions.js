'use strict'
import axios from 'axios'
import auth from '../utils/auth'
import {
  URL_USER_SIGNUP,
  URL_USER_SIGNIN,
  URL_USER_LOGOUT,
  URL_USER_FOLLOW,
  URL_USER_UNFOLLOW
} from '../constants/url'

export function signup(user) {
  // user = {'email': email, 'name': name, 'password': password}
  return dispatch => {
    axios
      .post(URL_USER_SIGNUP, user)
      .then(res => {
        console.log('signup', res)
        sessionStorage.token = res.data.token
        dispatch({ type: 'SIGNUP', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', payload: err.response.data })
      })
  }
}

export function signin(user) {
  // user = {'email': email, 'password': password}
  return dispatch => {
    axios
      .post(URL_USER_SIGNIN, user)
      .then(res => {
        console.log('signin res', res)
        sessionStorage.token = res.data.token
        dispatch({ type: 'SIGNIN', payload: res.data })
      })
      .catch(err => {
        console.log('signin err', err.response)
        dispatch({ type: 'SIGNIN_ERROR', payload: err.response.data })
      })
  }
}

export function logout() {
  return dispatch => {
    const headers = { token: auth.getToken() }
    axios
      .get(URL_USER_LOGOUT, { headers })
      .then(res => {
        console.log('logout res', res)
        dispatch({ type: 'LOGOUT', payload: res })
      })
      .then(err => {
        console.log('logout err', err.response)
      })
  }
}

export function follow(idToFollow) {
  return dispatch => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, idToFollow }
    axios
      .post(URL_USER_FOLLOW, params)
      .then(res => {
        console.log('follow res', res)
        dispatch({ type: 'FOLLOW', payload: res.data })
      })
      .catch(err => {
        console.log('follow err', err)
      })
  }
}

export function unFollow(idToUnFollow) {
  return dispatch => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, idToUnFollow }
    axios
      .post(URL_USER_UNFOLLOW, params)
      .then(res => {
        console.log('unfollow res', res)
        dispatch({ type: 'UNFOLLOW', payload: res.data })
      })
      .catch(err => {
        console.log('unfollow res', err)
      })
  }
}
