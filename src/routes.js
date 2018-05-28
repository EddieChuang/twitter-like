"use strict"
import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Main from './components/pages/Main'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => (<Redirect to='/home'/>)}/>
      <Route exact path='/home' render={() => (<Home/>)}/>
      <Route exact path='/signup' render={() => (<SignUp/>)}/>
      <Route exact path='/main' render={() => (<Main/>)}/>
    </Switch>
  </BrowserRouter>
)

export default routes