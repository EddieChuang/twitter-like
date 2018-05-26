"use strict"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup } from '../../actions/userActions'

class SignupForm extends React.Component{

  constructor(){
    super()
    this.state = {}

    this.onSignup = this.onSignup.bind(this) 
  }

  onSignup(e){
    e.preventDefault()
    const user = {
      name: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signup(user)
  }

  render(){
    console.log(this.state)
    return(
      <section id="signup">
        <form className="signup-form" onSubmit={this.onSignup}>
          <h3>Sign Up</h3>
          <ul>
            <li>
              <i className='fa fa-user' />
              <input type='text' ref='username' placeholder='Username' />
            </li>
            <li>
              <i className='fa fa-envelope' />
              <input type='email' ref='email' placeholder='Email' />
            </li>
            <li>
              <i className='fa fa-lock' />
              <input type='password' ref='password'placeholder='Password' />
            </li>
            <li>
              <button type='submit'>Submit</button>
              <a href="/signin">Have an account</a>
            </li>
          </ul>
        </form>
      </section>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    signup: signup
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupForm)