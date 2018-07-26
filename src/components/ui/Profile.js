'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Followings, Followers } from '.'
import { follow, unFollow } from '../../actions/userActions'
import { ChatModal } from '.'
import { openChatModal } from '../../actions/modalActions'

import userjs from '../../utils/user'
import auth from '../../utils/auth'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null // user of the page
    }
  }

  // FOLLOW && UNFOLLOW action
  componentWillReceiveProps(props) {
    this.setState({ user: props.userToFollow || props.userToUnFollow })
  }

  componentDidMount() {
    this.setState({ user: this.props.user })
    window.location.href = '#tab-following' // init tab
  }

  onFollow = () => {
    const idToFollow = this.state.user._id
    this.props.follow(idToFollow)
  }

  onUnFollow = () => {
    const idToUnFollow = this.state.user._id
    this.props.unFollow(idToUnFollow)
  }

  render() {
    const self = auth.getUser()
    const user = this.state.user ? this.state.user : this.props.user
    const isSelf = self._id === user._id
    const isFollowed = userjs.isFollowed(user)
    console.log('Profile render', user)
    return (
      <section id="profile">
        <div className="profile-image">
          <a>
            <img src={user.photo} />
          </a>
        </div>
        <div className="profile-name">
          {isSelf ? (
            <i className="fas fa-user-circle" />
          ) : isFollowed ? (
            <span>
              <i className="fas fa-user-check" onClick={this.onUnFollow} />
            </span>
          ) : (
            <span>
              <i className="fas fa-user-plus" onClick={this.onFollow} />
            </span>
          )}
          <span>
            {user.name}
            {/* <a href={`${URL_HOME}/${user._id}`}>{user.name}</a> */}
          </span>
          <span>
            <i className="far fa-comments" onClick={this.props.openChatModal} />
          </span>
        </div>
        <hr />
        <div className="profile-email">
          <i className="fa fa-envelope" />
          <span>{user.email}</span>
        </div>
        <hr />
        <div className="profile-activity">
          {/* display: none */}
          <span id="tab-following">Following</span>
          <span id="tab-follower">Follower</span>
          {/* display: none */}
          <div id="tab-container">
            <ul>
              <li>
                <a
                  className="tab-item tab-item-following"
                  href="#tab-following">
                  Following
                </a>
              </li>
              <li>
                <a className="tab-item tab-item-follower" href="#tab-follower">
                  Follower
                </a>
              </li>
            </ul>
            <Followings user={user} />
            <Followers user={user} />
          </div>
        </div>
        <ChatModal />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    userToFollow: state.user.userToFollow,
    userToUnFollow: state.user.userToUnFollow
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      follow: follow,
      unFollow: unFollow,
      openChatModal: openChatModal
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
