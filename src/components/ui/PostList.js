"use strict"
import React from 'react'
import axios from 'axios'
import { Post } from '../ui'

class PostList extends React.Component{
	
	constructor(){
    super()
    this.state ={
      user: null,
      tweets: []
    }

    this.renderPost = this.renderPost.bind(this)
  }
  
  

  componentWillReceiveProps(props){

    let user = props.user
    if(!user)
      return

    axios.get(`tweet/${user._id}`)
      .then((res) => {
        let tweets = res.data.tweets
        this.setState({user, tweets})
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  renderPost(){
    let tweets = this.state.tweets
    let user   = this.state.user
    let posts  = tweets.map((tweet, i) => {
      return <Post tweet={tweet} user={user} key={tweet._id}/>
    })
    return posts
  }



	render(){

		return(
			<section id="postList">
				{this.renderPost()}
			</section>
		)
	}

}

// function mapStateToProps(state){
//   return
// }

export default PostList