'use strict'
import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Start from './components/pages/Start'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import auth from './utils/auth'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/start" />} />
      <Route exact path="/start" render={() => <Start />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route
        exact
        path="/signin"
        render={() =>
          auth.signined() ? (
            <Redirect to={`/home/${sessionStorage._id}`} />
          ) : (
            <SignIn />
          )
        }
      />
      <Route
        exact
        path="/home/:userId"
        render={({ match }) =>
          auth.signined() ? (
            <Home userId={match.params.userId} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    </Switch>
  </BrowserRouter>
)

export default routes
