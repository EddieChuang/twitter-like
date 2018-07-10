'use strict'
import React from 'react'
import axios from 'axios'
import auth from '../../utils/auth'
import { URL_USER_GET_FOLLOWER } from '../../constants/url'

class Followers extends React.Component {
  constructor() {
    super()
    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    this.getFollowers(this.props.user)
  }

  componentWillReceiveProps(props) {
    this.getFollowers(props.user)
  }

  getFollowers = user => {
    const headers = { token: auth.getToken() }
    axios
      .get(`${URL_USER_GET_FOLLOWER}/${user._id}`, { headers })
      .then(res => {
        let followers = res.data.followers
        this.setState({ user, followers })
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderFollowers = () => {
    let followers = this.state.followers
    return followers.map((follower, i) => (
      <div className="follower-user">
        <img src={follower.photo} />
        <span>{follower.name}</span>
      </div>
    ))
  }

  render() {
    return (
      <div className="tab-content tab-content-follower">
        {this.renderFollowers()}
      </div>
    )
  }
}

export default Followers
