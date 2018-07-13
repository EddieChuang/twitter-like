'use strict'
import React from 'react'
import user from '../../utils/user'

class Followers extends React.Component {
  constructor() {
    super()
    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    // this.getFollowers(this.props.user._id)
    user.getFollowers(this.props.user._id, followers => {
      this.state({ followers })
    })
  }

  componentWillReceiveProps(props) {
    // this.getFollowers(props.user._id)
    user.getFollowers(props.user._id, followers => {
      this.state({ followers })
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
