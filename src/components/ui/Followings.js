"use strict"
import React from 'react'
import axios from 'axios'

class Followings extends React.Component{
  
  constructor(){
    super()
    this.state = {
      followings: []
    }

    this.renderFollowings = this.renderFollowings.bind(this)    
    this.getFollowings = this.getFollowings.bind(this)
  }

  componentDidMount(){
    this.getFollowings(this.props.user)
  }

  componentWillReceiveProps(props){
    // let user = props.user
    // if(!user)
    //     return  
    this.getFollowings(props.user)
  }

  getFollowings(user){
    axios.get(`user/followings/${user._id}`)
      .then((res) => {
        let followings = res.data.followings
        // console.log('followings res.data', res.data)
        this.setState({user, followings})
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  renderFollowings(){

    let followings = this.state.followings
    return followings.map((following, i) => (
      <div className="following-user">
        <img src={following.photo}/>
        <span>{following.name}</span>
      </div>
    ))
    
  }

  render(){

    return(
      <div className="tab-content tab-content-following">
        {this.renderFollowings()}
      </div>
    )
  }
}

export default Followings