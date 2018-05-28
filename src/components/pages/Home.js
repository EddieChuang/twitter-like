"use strict"
import React from 'react'
import { Header, Profile, PostList } from '../ui'

class Home extends React.Component{
  
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