"use strict"
import React from 'react'
import axios from 'axios'
import { Header, Profile, PostList } from '../ui'

class Home extends React.Component{
  
  constructor(){
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    let id = sessionStorage._id
    axios.get('/user/' + id)
      .then((res) => {
        this.setState({user: res.data.user})
      })
  }

  render(){

    let user = this.state.user
    return(
      <div className="container">
        <Header user={user}/>
        <div id="content">
					<Profile user={user}/>
					<PostList />
				</div>
      </div>
    )

  }
}

export default Home