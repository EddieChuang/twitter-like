"use strict"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin } from '../../actions/userActions'

class SigninForm extends React.Component{

  constructor(){
    super()
    
    this.onSignin = this.onSignin.bind(this)
  }

  onSignin(e){
    e.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signin(user)
    

  }

  

  render(){
    return(
      <section id="signin">
        <form onSubmit={this.onSignin}> 
          <h3>Sign In</h3>
          <div className='input-field'>
            <i className='fa fa-envelope'/>
            <input type='email' ref='email' placeholder='Email'/>
          </div>
          <div className='input-field'>
            <i className='fa fa-lock'/>
            <input type='password' ref='password' placeholder='Password' />
          </div>
          <div className='submit-field'>
            <button type='submit'>Submit</button>
            <a href='/signup'>Sign up an account</a>
          </div>



        </form>
      </section>
    )
  }

}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    signin: signin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)