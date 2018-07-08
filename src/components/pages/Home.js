'use strict'
import React from 'react'
import axios from 'axios'
import { Header, Profile, TweetList } from '../ui'
import parser from '../../utils/parser'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    // let id = sessionStorage._id
    // let id = parser.getUrlParams().id
    const userId = this.props.userId
    console.log('componentDidMount')
    axios.get(`/user/${userId}`).then(res => {
      this.setState({ user: res.data.user })
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
