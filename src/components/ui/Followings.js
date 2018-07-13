'use strict'
import React from 'react'
import user from '../../utils/user'

class Followings extends React.Component {
  constructor() {
    super()
    this.state = {
      followings: []
    }
  }

  componentDidMount() {
    user.getFollowings(this.props.user._id, followings => {
      this.state({ followings })
    })
  }

  componentWillReceiveProps(props) {
    user.getFollowings(props.user._id, followings => {
      this.state({ followings })
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
