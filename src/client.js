"use strict"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index'
import routes from './routes'

const middleware = applyMiddleware(thunk, logger)
const initialState = window.INITIAL_STATE
const store = createStore(reducers, initialState, middleware)

require('./style/main.scss')

const Routes = (
  <Provider store={store}>
    {/* <div> */}
      {routes}
    {/* </div> */}
  </Provider>
)

ReactDOM.render(
  Routes, document.getElementById('app')
)
