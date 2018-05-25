"use strict"
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import SignUp from './components/pages/SignUp'

console.log(SignUp)
const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SignUp}/>
    </Switch>
  </BrowserRouter>
)

export default routes