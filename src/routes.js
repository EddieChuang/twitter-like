"use strict"
import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Start from './components/pages/Start'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'


const signined = !!sessionStorage._id


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => (<Redirect to='/start'/>)}/>
      <Route exact path='/start' render={() => (<Start/>)}/>
      <Route exact path='/signup' render={() => (<SignUp/>)}/>
      <Route exact path='/signin' render={() => (signined ? <Redirect to="/home"/> : <SignIn/>)}/>
      <Route exact path='/home' render={() => (signined ? <Home/> : <Redirect to="/signin"/>)}/>
    </Switch>
  </BrowserRouter>
)

export default routes