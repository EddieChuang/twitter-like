import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { close } from '../../actions/modalActions'

class NewPostModal extends React.Component{

  constructor(){
    super()

  }




  render(){

    console.log('NewPostModal', this.props)
    let hidden = this.props.visibility ? '' : 'hidden'
    return (
      <div className={"modal " + hidden}>
        <div className="modal-content">
          <span className="modal-close" onClick={this.props.close}>&times;</span>
          <p>New Post Content</p>
        </div>
      </div>
    )
  }


}

function mapStateToProps(state){
  console.log('mapStateToProps NewPostModal')
  return {
    visibility: state.modal.visibility
  }
}

function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps NewPostModal')
  return bindActionCreators({
    close: close
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostModal)