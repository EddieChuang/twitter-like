'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin } from '../../actions/userActions'

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
    if (this.props.status === 0) return

    let success = this.props.status === 200
    let { user, message } = this.props
    // if (success) {
    //   window.setTimeout(() => {
    //     window.location = `http://127.0.0.1:3030/home/${user._id}`
    //   }, 3000)
    // }

    return success ? (
      <div className="message message-success">
        Successfully. After 3s redirecting to home page...
      </div>
    ) : (
      <div className="message message-error">{message}</div>
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
    status: state.user.status,
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
