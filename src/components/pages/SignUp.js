"use strict"
import React from 'react'
import { connect } from 'react-redux'
import { Header, SignupForm } from '../ui'

class SignUp extends React.Component{

  render(){
    return(
      <div className="container">
        <Header/>
        <SignupForm/>
      </div>
    )
  }
}

export default SignUp
