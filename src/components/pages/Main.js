"use strict"
import React from 'react'
import { Header, Profile, PostList } from '../ui'

class Main extends React.Component{
  
  render(){

    return(
      <div id="main">
        <Header/>
        <div id="content">
					<Profile />
					<PostList />
				</div>
      </div>
    )

  }
}

export default Main