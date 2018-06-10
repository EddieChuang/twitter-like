"use strict"
import React from 'react'

class Post extends React.Component{
	constructor(){
    super()
    this.state = {
      user: null,
      tweet: null
    }
  }
  
  componentWillMount(){
    // let {user, tweet} = this.props
    // this.setState({tweet, user})
  }

	render(){

    // let {user, tweet} = this.state
    let tweet = this.props.tweet
		return(
			<section id="post">
				<div className="poster">
          <img src="/images/avatar.png"/>
          <span>{tweet.owner.name}</span>
        </div>
        <div className="post-content">
          {tweet.content}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, lorem finibus accumsan dictum, sapien dolor lacinia est, ut pharetra nulla erat et tortor. Ut ac urna ultricies, auctor enim eget, porttitor turpis. Donec eros enim, suscipit ut pulvinar ac, tempus id sapien. In bibendum hendrerit quam eu commodo. Nulla et mi id velit mattis tristique */}
        </div>
        <div className="post-footer">
          <div className="comment">
            <i className="far fa-comment"/>
            <span>{tweet.comments.length}</span>
          </div>
          <div className="like">
            <i className="far fa-heart"/>
            <span>{tweet.like}</span>
          </div>
        </div>
			</section>
		)
	}

}

export default Post