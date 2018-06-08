"use strict"
import React from 'react'
import axios from 'axios'

class Followers extends React.Component{
  
  constructor(){
    super()
    this.state = {
      user: null,
      followers: []
    }

    this.renderFollowers = this.renderFollowers.bind(this)    
    
  }

  componentWillReceiveProps(props){
    let user = props.user
    if(!user)
        return  

    axios.get(`user/followers/${user._id}`)
      .then((res) => {
        let followers = res.data.followers
        this.setState({user, followers})
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  renderFollowers(){

    let followers = this.state.followers
    return followers.map((follower, i) => (
      <div className="follower-user">
        <img src={follower.photo}/>
        <span>{follower.name}</span>
      </div>
    ))
    
  }

  render(){

    let user = this.state.user
    return(
      <div className="tab-content tab-content-follower">
        {this.renderFollowers()}
      </div>
    )
  }
}

export default Followers