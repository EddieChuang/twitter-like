'use strict'
import React from 'react'
import axios from 'axios'
import auth from '../../utils/auth'

import { URL_USER_GET_FOLLOING } from '../../constants/url'

class Followings extends React.Component {
  constructor() {
    super()
    this.state = {
      followings: []
    }
  }

  componentDidMount() {
    this.getFollowings(this.props.user)
  }

  componentWillReceiveProps(props) {
    // let user = props.user
    // if(!user)
    //     return
    this.getFollowings(props.user)
  }

  getFollowings = user => {
    const headers = {} //{ token: auth.getToken() }
    axios
      .get(`${URL_USER_GET_FOLLOING}/${user._id}`, { headers })
      .then(res => {
        console.log('Followings getFollowings', res)
        const followings = res.data.followings
        this.setState({ user, followings })
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderFollowings = () => {
    let followings = this.state.followings
    return followings.map((following, i) => (
      <div className="following-user">
        <img src={following.photo} />
        <span>{following.name}</span>
      </div>
    ))
  }

  render() {
    return (
      <div className="tab-content tab-content-following">
        {this.renderFollowings()}
      </div>
    )
  }
}

export default Followings
