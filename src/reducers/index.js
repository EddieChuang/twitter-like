'use strict'
import { combineReducers } from 'redux'
import { userReducers } from './userReducers'
import { modalReducers } from './modalReducers'
import { tweetReducers } from './tweetReducers'

const reducers = combineReducers({
  user: userReducers,
  modal: modalReducers,
  tweet: tweetReducers
})

const rootReducers = (state, action) => {
  if (action.type === 'LOGOUT') {
    delete sessionStorage.token
    state = undefined
    location.href = '/start'
  }
  return reducers(state, action)
}

export default rootReducers
