"use strict"
import {combineReducers} from 'redux'
import {userReducers} from './userReducers'
import {modalReducers} from './modalReducers'

export default combineReducers({
  'user': userReducers,
  'modal': modalReducers
})