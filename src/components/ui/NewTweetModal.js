import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeTweetModal } from '../../actions/modalActions'
import { newTweet } from '../../actions/tweetActions'

class NewTweetModal extends React.Component {
  constructor() {
    super()
  }

  onNewTweet = () => {
    let text = this.refs.text.value
    if (text === '') return alert('~ Share Your Life ~')
    this.props.newTweet(text)
  }

  render() {
    let hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={'modal ' + hidden}>
        <div className="modal-content">
          {/* <form> */}
          <div className="modal-header">
            <span className="modal-title">
              <i className="fas fa-edit" />New Tweet
            </span>
            <span className="modal-close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <textarea ref="text" placeholder="Sharing Your Life" />
          </div>
          <div className="modal-footer">
            <div className="modal-submit">
              <button type="submit" onClick={this.onNewTweet}>
                TWEET
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('mapStateToProps NewPostModal')
  return {
    visibility: state.modal.tweetModalVisibility
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('mapDispatchToProps NewTweetModal')
  return bindActionCreators(
    {
      close: closeTweetModal,
      newTweet: newTweet
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTweetModal)
