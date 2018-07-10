'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storageSession from 'redux-persist/lib/storage/session'
import reducers from './reducers/index'
import routes from './routes'
import 'babel-polyfill'
require('./style/main.scss')

const persistConfig = {
  key: 'root',
  storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, reducers)
const middleware = applyMiddleware(thunk, logger)
const initialState = window.INITIAL_STATE
const store = createStore(persistedReducer, initialState, middleware)
const persistor = persistStore(store)

const Routes = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {routes}
    </PersistGate>
  </Provider>
)

ReactDOM.render(Routes, document.getElementById('app'))
