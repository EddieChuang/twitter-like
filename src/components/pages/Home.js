"use strict"
import React from 'react'
import axios from 'axios'
import { Header, Profile, PostList } from '../ui'
import parser from '../../utils/parser'

class Home extends React.Component{
  
  constructor(){
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    // let id = sessionStorage._id
    let id = parser.getUrlParams().id
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
					<PostList user={user}/>
				</div>
      </div>
    )

  }
}

export default Home