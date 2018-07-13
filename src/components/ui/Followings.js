'use strict'
import React from 'react'
import user from '../../utils/user'
import { URL_HOME } from '../../constants/url'

class Followings extends React.Component {
  constructor() {
    super()
    this.state = {
      followings: []
    }
  }

  componentDidMount() {
    user.getFollowings(this.props.user._id, followings => {
      this.setState({ followings })
    })
  }

  componentWillReceiveProps(props) {
    user.getFollowings(props.user._id, followings => {
      this.setState({ followings })
    })
  }

  renderFollowings = () => {
    let followings = this.state.followings
    return followings.map((following, i) => (
      <div className="following-user" key={i}>
        <img src={following.photo} />
        <span>
          <a href={`${URL_HOME}/${following._id}`}>{following.name}</a>
        </span>
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
