import React from 'react'
import { connect } from 'react-redux'
import { closeCommentModal } from '../../actions/modalActions'
import { newComment } from '../../actions/tweetActions'
import { bindActionCreators } from '../../../node_modules/redux'
import auth from '../../utils/auth'

class CommentModal extends React.Component {
  constructor() {
    super()
  }

  renderCommentList = () => {
    return <div className="comment-list">{this.renderComment()}</div>
  }

  renderComment = () => {
    const comments = this.props.comments
    return comments.map(comment => {
      console.log(comment)
      return (
        <div className="comment">
          <div className="comment-aside">
            <div className="comment-user-avatar">
              <img src={comment.speaker.photo} />
            </div>
          </div>
          <div className="comment-body">
            <div className="comment-content">
              <div className="comment-user-name">
                <a>{comment.speaker.name}</a>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          </div>
        </div>
      )
    })
  }

  onNewComment = () => {
    const text = this.refs.commentText.value
    const tweetId = this.props.tweetId
    this.props.newComment(tweetId, text)
  }

  renderCommentInputSection = () => {
    return (
      <div className="comment-input-section">
        <div className="comment-aside">
          <div className="comment-user-avatar">
            <img src="https://gravatar.com/avatar/653c8594ceeda34ae16095fc7a289674?s=200&d=retro" />
          </div>
        </div>
        <div className="comment-input">
          <input ref="commentText" placeholder="Share Your Comment" />
          <button onClick={this.onNewComment}>SEND</button>
        </div>
      </div>
    )
  }

  render() {
    const hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={`modal ${hidden}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">
              <i className="fas fa-comments" /> Comment Modal
            </span>
            <span className="modal-close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="modal-body">{this.renderCommentList()}</div>
          <div className="modal-footer">{this.renderCommentInputSection()}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.modal.commentModalVisibility,
    comments: state.modal.comments,
    tweetId: state.modal.tweetId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      close: closeCommentModal,
      newComment: newComment
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentModal)
