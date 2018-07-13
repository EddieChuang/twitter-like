'use strict'
import React from 'react'
import { Header, Profile, TweetList } from '../ui'
import user from '../../utils/user'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    user.init(this.props.userId, user => {
      this.setState({ user })
    })
  }

  render() {
    console.log('Home render')
    const user = this.state.user
    return (
      <div className="container">
        {user ? <Header /> : ''}
        <div id="content">
          {user ? <Profile user={user} /> : ''}
          {user ? <TweetList user={user} /> : ''}
        </div>
      </div>
    )
  }
}
export default Home
