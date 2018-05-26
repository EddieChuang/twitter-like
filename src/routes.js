"use strict"
import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => (<Redirect to='/home'/>)}/>
      <Route exact path='/home' render={() => (<Home/>)}/>
      <Route exact path='/signup' render={() => (<SignUp/>)}/>
    </Switch>
  </BrowserRouter>
)

export default routes