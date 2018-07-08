'use strict'
import React from 'react'
import axios from 'axios'

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
    console.log('Followings getFollowings', user)
    axios
      .get(`/user/followings/${user._id}`)
      .then(res => {
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
