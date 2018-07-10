'use strict'
import React from 'react'
import axios from 'axios'
import { Header, Profile, TweetList } from '../ui'
import parser from '../../utils/parser'
import auth from '../../utils/auth'
import { URL_USER_GET } from '../../constants/url'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const userId = this.props.userId
    const headers = { token: auth.getToken() }
    axios
      .get(`${URL_USER_GET}/${userId}`, { headers })
      .then(res => {
        this.setState({ user: res.data.user })
      })
      .catch(err => {
        console.log(err)
        console.log(err.response)
      })
  }

  render() {
    console.log('Home render')
    const user = this.state.user
    return (
      <div className="container">
        {user ? <Header user={user} /> : ''}
        <div id="content">
          {user ? <Profile user={user} /> : ''}
          {user ? <TweetList user={user} /> : ''}
        </div>
      </div>
    )
  }
}

export default Home
