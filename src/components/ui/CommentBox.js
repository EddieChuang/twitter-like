import React from 'react'
import { connect } from 'react-redux'
import { closeCommentBox } from '../../actions/modalActions'
import { bindActionCreators } from '../../../node_modules/redux'

class CommentBox extends React.Component {
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
              <i className="fas fa-comments" /> Comment Box
            </span>
            <span className="modal-close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="modal-body">{/* Comment list */}</div>
          <div className="modal-footer">{/* input Comment*/}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.modal.CommentBoxVisibility
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      close: closeCommentBox
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox)
