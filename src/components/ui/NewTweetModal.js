import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { close } from '../../actions/modalActions'
import { newTweet } from '../../actions/tweetActions'

class NewTweetModal extends React.Component{

  constructor(){
    super()

    this.onNewTweet = this.onNewTweet.bind(this)
  }

  onNewTweet(){

    let text = this.refs.text.value

    this.props.newTweet(text)

  }




  render(){

    let hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={"modal " + hidden}>
        <div className="modal-content">
          {/* <form> */}
            <div className="modal-header">
              <span className="modal-title"><i className="fas fa-edit"/>New Tweet</span>
              <span className="modal-close" onClick={this.props.close}>&times;</span>
            </div>
            <div className="modal-body">
              <textarea ref="text" placeholder="Sharing Your Life">

              </textarea>
            </div>
            <div className="modal-footer">
              <button type="submit" onClick={this.onNewTweet}>TWEET</button>
            </div>
          {/* </form> */}
        </div>
      </div>
    )
  }


}

function mapStateToProps(state){
  // console.log('mapStateToProps NewPostModal')
  return {
    visibility: state.modal.visibility
  }
}

function mapDispatchToProps(dispatch){
  // console.log('mapDispatchToProps NewTweetModal')
  return bindActionCreators({
    close: close,
    newTweet: newTweet
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTweetModal)