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
    axios.get('/user/123')
      .then((res) => {
        console.log(res)
      })
    // fetch('/user/:id')
    //   .then(res => {console.log(res)})
    // let param = new FormData()
    // param.append('id', sessionStorage._id)
    // axios.post('/user', param)
    //   .then((res) => {
    //     console.log('user')
    //     console.log(res)
    //   })
  }

  render(){

    return(
      <div className="container">
        <Header/>
        <div id="content">
					<Profile />
					<PostList />
				</div>
      </div>
    )

  }
}

export default Home