import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { close, newPost } from '../../actions/modalActions'

class NewPostModal extends React.Component{

  constructor(){
    super()

    this.onNewPost = this.onNewPost.bind(this)
  }

  onNewPost(){

    let text = this.refs.text.value

    this.props.newPost(text)

  }




  render(){

    let hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={"modal " + hidden}>
        <div className="modal-content">
          {/* <form> */}
            <div className="modal-header">
              <span className="modal-title"><i className="fas fa-edit"/>Net Post</span>
              <span className="modal-close" onClick={this.props.close}>&times;</span>
            </div>
            <div className="modal-body">
              <textarea ref="text" placeholder="Sharing Your Life">

              </textarea>
            </div>
            <div className="modal-footer">
              <button type="submit" onClick={this.onNewPost}>POST</button>
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
  // console.log('mapDispatchToProps NewPostModal')
  return bindActionCreators({
    close: close,
    newPost: newPost
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostModal)