"use strict"
import React from 'react'
import { connect } from 'react-redux'
import { Header, SignupForm } from '../ui'

class SignUp extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <SignupForm/>
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return{
//     books: state.books.books
//   }
// }

export default SignUp
// export default connect(mapStateToProps)(SignUp)