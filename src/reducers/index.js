"use strict"
import {combineReducers} from 'redux'
import {xReducers} from './xReducers'

export default combineReducers({
  'x': xReducers
})