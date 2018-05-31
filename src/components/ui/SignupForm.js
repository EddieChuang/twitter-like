"use strict"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup } from '../../actions/userActions'

class SignupForm extends React.Component{

  constructor(){
    super()
    this.state = {
      second: null
    }

    this.onSignup = this.onSignup.bind(this) 
    this.renderMessage = this.renderMessage.bind(this)
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

  renderMessage(){

    if(this.props.status === 0)
        return
        
    let success = this.props.status === 200
    let {user, message} = this.props
    if(success)
        window.setTimeout(() => {window.location = 'http://127.0.0.1:3030/home'}, 3000)

    return (
      success ? (
        <div className='message message-success'>Successfully. After 3s redirecting to home page...</div>
      ) 
      : (
        <div className='message message-error'>{message}</div>
      )
    )
  }

  render(){
    // console.log('SignupForm render')
    return(
      <section id="signup">
        <form className="signup-form" onSubmit={this.onSignup}>
          <h3>Sign Up</h3>
          {this.renderMessage()}
          <ul>
            <li>
              <i className='fa fa-user' />
              <input type='text' ref='username' name='name' placeholder='Username' />
            </li>
            <li>
              <i className='fa fa-envelope' />
              <input type='email' ref='email' name='email' placeholder='Email' />
            </li>
            <li>
              <i className='fa fa-lock' />
              <input type='password' ref='password' name='password' placeholder='Password' />
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

function mapStateToProps(state){
  // console.log('SignupForm mapStateToProps', state)
  return {
    status: state.user.status,
    message: state.user.message,
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch){
  // console.log('SignupForm mapDispatchToProps', dispatch)  
  return bindActionCreators({
    signup: signup
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)