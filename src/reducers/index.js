"use strict"
import { combineReducers } from 'redux'
import { userReducers  } from './userReducers'
import { modalReducers } from './modalReducers'
import { tweetReducers } from './tweetReducers';

export default combineReducers({
  'user': userReducers,
  'modal': modalReducers,
  'tweet': tweetReducers
})