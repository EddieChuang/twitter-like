import React from 'react'
import { connect } from 'react-redux'
import { closeCommentModal } from '../../actions/modalActions'
import { bindActionCreators } from '../../../node_modules/redux'

class CommentModal extends React.Component {
  constructor() {
    super()
  }

  renderCommentList = () => {
    return <div className="comment-list">{this.renderComment()}</div>
  }

  renderComment = user => {
    return (
      <div className="comment">
        <div className="comment-aside">
          <div className="comment-user-avatar">
            <img src="https://gravatar.com/avatar/653c8594ceeda34ae16095fc7a289674?s=200&d=retro" />
          </div>
        </div>
        {/* end of comment-aside */}
        <div className="comment-body">
          <div className="comment-content">
            <div className="comment-user-name">
              <a>chiamin</a>
            </div>
            <div className="comment-text">i am chiamin</div>
          </div>
          {/* end of comment-content */}
        </div>
        {/* end of comment-body */}
      </div>
      /* end of comment */
    )
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
          <input placeholder="Share Your Comment" />
          <button>SEND</button>
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
    visibility: state.modal.commentModalVisibility
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      close: closeCommentModal
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentModal)
