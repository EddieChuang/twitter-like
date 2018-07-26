import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeChatModal } from '../../actions/modalActions'

class ChatModal extends React.Component {
  constructor() {
    super()
  }

  renderMessage = () => {
    return (
      <div className="message">
        <div className="message-username" />
        <div className="message-text" />
      </div>
    )
  }

  renderMessageBox = () => {
    return (
      <div className="message-container">
        <div className="message-box">{this.renderMessage()}</div>
      </div>
    )
  }

  renderMessageInput = () => {}

  render() {
    const hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={`modal ${hidden}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">
              <i className="fas fa-comments" /> Chat Modal
            </span>
            <span className="modal-close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="modal-body">{this.renderMessageBox()}</div>
          <div className="modal-footer">{this.renderMessageInput()}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.modal.chatModalVisibility
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ close: closeChatModal }, dispatch)
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ChatModal)
