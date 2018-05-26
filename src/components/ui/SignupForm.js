"use strict"
import React from 'react'

class SignupForm extends React.Component{


  render(){
    return(
      <section id="signup">
        <form className="signup-form">
          <h3>Sign Up</h3>
          <ul>
            <li>
              <i className='fa fa-user' />
              <input type='text' id='username' placeholder='Username' />
            </li>
            <li>
              <i className='fa fa-envelope' />
              <input type='email' id='email' placeholder='Email' />
            </li>
            <li>
              <i className='fa fa-lock' />
              <input type='password' id='password'placeholder='Password' />
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

export default SignupForm