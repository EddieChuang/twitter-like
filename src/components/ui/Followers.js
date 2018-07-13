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
    user.getFollowers(this.props.user._id, followers => {
      this.setState({ followers })
    })
  }

  componentWillReceiveProps(props) {
    user.getFollowers(props.user._id, followers => {
      this.setState({ followers })
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
