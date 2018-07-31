import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeChatModal } from '../../actions/modalActions'
import auth from '../../utils/auth'

class ChatModal extends React.Component {
  constructor() {
    super()
    this.state = {
      socket: '',
      messages: [] // { name, text }
    }
  }

  componentDidMount() {
    const self = auth.getUser()._id

    const chatTo = this.props.user._id
    const chatId = self > chatTo ? self + chatTo : chatTo + self
    const query = `chatId=${chatId}`
    const socket = io.connect(
      'http://127.0.0.1:3030',
      { query }
    )
    socket.on('chatId', data => {
      console.log('receive', data)
      const messages = this.state.messages.concat(data)
      console.log(messages)
      this.setState({ messages })
    })
    this.setState({ socket, chatId })
  }

  onSendMessage = () => {
    const { _id, name } = auth.getUser()
    const { chatId, socket } = this.state
    const text = this.refs.messageText.value
    const data = { userId: _id, name, text }
    socket.emit('chatId', data)
    this.refs.messageText.value = ''
  }

  renderMessage = () => {
    const self = auth.getUser()._id

    return this.state.messages.map((message, i) => {
      const isSelf = self === message.userId ? 'self' : ''
      return (
        <div key={i} className={`message-container ${isSelf}`}>
          <div className={`message ${isSelf}`}>
            <div className="message-username">{message.name}</div>
            <div className="message-text-box">
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        </div>
      )
    })
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
    const socket = this.state.socket
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
