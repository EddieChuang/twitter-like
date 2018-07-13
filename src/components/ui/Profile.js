'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Followings, Followers } from '.'
import { follow } from '../../actions/userActions'
import userjs from '../../utils/user'
import auth from '../../utils/auth'
import { URL_HOME } from '../../constants/url'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null // this.props.user // user of the page
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
    this.props.follow(this.state.user._id)
  }

  onUnFollow = () => {}

  render() {
    const self = auth.getUser()
    const user = this.state.user ? this.state.user : this.props.user
    const isSelf = self._id === user._id
    const isFollowed = userjs.isFollowed(user)
    console.log('Profile render', isFollowed)
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
      follow: follow
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
