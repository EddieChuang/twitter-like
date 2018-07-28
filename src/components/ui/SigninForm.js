'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin } from '../../actions/userActions'
import auth from '../../utils/auth'
import { URL_HOME } from '../../constants/url'

class SigninForm extends React.Component {
  constructor() {
    super()
  }

  onSignin = e => {
    e.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signin(user)
  }

  renderMessage = () => {
    const { user, message, success } = this.props
    if (success === null) return

    if (success) {
      window.setTimeout(() => {
        window.location = `${URL_HOME}/${user._id}`
      }, 3000)
    }

    return success ? (
      <div className="signup-message signup-message-success">
        Successfully. After 3s redirecting to home page...
      </div>
    ) : (
      <div className="signup-message signup-message-error">{message}</div>
    )
  }

  render() {
    return (
      <section id="signin">
        <form onSubmit={this.onSignin}>
          <h3>Sign In</h3>
          {this.renderMessage()}
          <div className="input-field">
            <i className="fa fa-envelope" />
            <input type="email" ref="email" name="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fa fa-lock" />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="submit-field">
            <button type="submit">Submit</button>
            <a href="/signup">Sign up an account</a>
          </div>
        </form>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    success: state.user.success,
    message: state.user.message,
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      signin: signin
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninForm)
