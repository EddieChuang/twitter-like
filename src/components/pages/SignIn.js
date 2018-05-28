"use strict"
import React from 'react'
import { connect } from 'react-redux'
import { Header, SigninForm } from '../ui'

class SignIn extends React.Component{

  render(){
    return(
      <div className="container">
        <Header/>
        <SigninForm/>
      </div>
    )
  }
}

export default SignIn