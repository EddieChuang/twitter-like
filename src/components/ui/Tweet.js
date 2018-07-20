'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { likeTweet, unlikeTweet } from '../../actions/tweetActions'
import { openCommentModal } from '../../actions/modalActions'
import { URL_HOME } from '../../constants/url'

class Tweet extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  renderLike(tweet) {
    // console.log(this.props)
    let liked =
      tweet.like.findIndex(user => user.user === sessionStorage._id) !== -1
    if (liked) {
      return (
        <i
          className="fas fa-heart"
          onClick={() => this.props.unlikeTweet(tweet._id)}
        />
      )
    } else {
      return (
        <i
          className="far fa-heart"
          onClick={() => this.props.likeTweet(tweet._id)}
        />
      )
    }
  }

  render() {
    let tweet = this.props.tweet
    console.log(tweet)
    return (
      <section id="tweet">
        <div className="tweeter">
          <img src="/images/avatar.png" />
          <span>
            <a href={`${URL_HOME}/${tweet.owner._id}`}>{tweet.owner.name}</a>
          </span>
        </div>
        <div className="tweet-content">{tweet.content}</div>
        <div className="tweet-footer">
          <div className="comment-icon">
            <i
              className="far fa-comment"
              onClick={this.props.openCommentModal}
            />
            <span>{tweet.comments.length}</span>
          </div>
          <div className="like">
            {this.renderLike(tweet)}
            <span>{tweet.like.length}</span>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators(
    {
      likeTweet: likeTweet,
      unlikeTweet: unlikeTweet,
      openCommentModal: openCommentModal
    },
    dispatch
  )
}

export default connect(
  null,
  mapStateToDispatch
)(Tweet)
