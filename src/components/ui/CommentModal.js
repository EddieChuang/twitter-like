import React from 'react'
import { connect } from 'react-redux'
import { closeCommentModal } from '../../actions/modalActions'
import { bindActionCreators } from '../../../node_modules/redux'

class CommentModal extends React.Component {
  constructor() {
    super()
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
          <div className="modal-body">
            <div className="comment-container">
              <div className="comment-list">
                <div className="comment">
                  <div className="comment-aside">
                    <div className="comment-user-avatar">
                      <img src="https://gravatar.com/avatar/653c8594ceeda34ae16095fc7a289674?s=200&d=retro" />
                    </div>
                  </div>
                  {/* comment-aside */}
                  <div className="comment-body">
                    <div className="comment-content">
                      <div className="comment-user-name">
                        <a>chiamin</a>
                      </div>
                      <div className="comment-text">i am chiamin</div>
                    </div>
                    {/* comment-content */}
                    {/* <div className="comment-time">
                      <span>2018-07-17</span>
                    </div> */}
                  </div>
                  {/* comment-body */}
                </div>
                {/* comment */}
                <div className="comment">
                  <div className="comment-aside">
                    <div className="comment-user-avatar">
                      <img src="https://gravatar.com/avatar/653c8594ceeda34ae16095fc7a289674?s=200&d=retro" />
                    </div>
                  </div>
                  {/* comment-aside */}
                  <div className="comment-body">
                    <div className="comment-content">
                      <div className="comment-user-name">
                        <a href="#">chiamin</a>
                      </div>
                      <div className="comment-text">i am chiamin</div>
                    </div>
                    {/* comment-content */}
                    {/* <div className="comment-time">
                      <span>2018-07-17</span>
                    </div> */}
                  </div>
                  {/* comment-body */}
                </div>
                {/* comment */}
              </div>
              {/* comment-list */}
            </div>
            {/* comment-container */}
          </div>
          {/* modal-body */}
          <div className="modal-footer">{/* input Comment*/}</div>
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
