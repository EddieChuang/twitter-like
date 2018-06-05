"use strict"
import React from 'react'
import { Post } from '../ui'

class PostList extends React.Component{
	
	constructor(){
		super()
	}



	render(){
		return(
			<section id="postList">
				<Post />
				<Post />
				<Post />
			</section>
		)
	}

}

function mapStateToProps(state){
  return
}

export default PostList