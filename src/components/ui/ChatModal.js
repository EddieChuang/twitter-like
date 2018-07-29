import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeChatModal } from '../../actions/modalActions'
import { isObject } from 'util'

class ChatModal extends React.Component {
  constructor() {
    super()
    this.state = {
      socket: ''
    }
  }

  componentDidMount() {
    const socket = io.connect()
    this.setState({ socket })
  }

  onSendMessage = () => {
    const socket = this.state.socket
    const text = this.refs.messageText.value
    const data = { text }
    socket.emit('message', data)
    this.refs.messageText.value = ''
  }

  renderMessage = () => {
    return (
      <React.Fragment>
        <div className="message-container">
          <div className="message">
            <div className="message-username">chiamin</div>
            <div className="message-text-box">
              <div className="message-text">i am chiamin</div>
            </div>
          </div>
        </div>
        <div className="message-container self">
          <div className="message self">
            <div className="message-username">chiamin</div>
            <div className="message-text-box">
              <div className="message-text">i am chiamin</div>
            </div>
          </div>
        </div>
        <div className="message-container self">
          <div className="message self">
            <div className="message-username">chiamin</div>
            <div className="message-text-box">
              <div className="message-text">i am chiamin</div>
            </div>
          </div>
        </div>
        <div className="message-container self">
          <div className="message self">
            <div className="message-username">chiamin</div>
            <div className="message-text-box">
              <div className="message-text">i am chiamin</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderMessageBox = () => {
    return <div className="message-box">{this.renderMessage()}</div>
  }

  renderMessageInput = () => {
    return (
      <div className="message-input-section">
        <div className="message-aside">
          <div className="message-user-avatar">
            <img src="https://gravatar.com/avatar/653c8594ceeda34ae16095fc7a289674?s=200&d=retro" />
          </div>
        </div>
        <div className="message-input">
          <input ref="messageText" placeholder="Share Your Comment" />
          <button onClick={this.onSendMessage}>SEND</button>
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
