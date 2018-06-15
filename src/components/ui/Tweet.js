"use strict"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { likeTweet, unlikeTweet } from '../../actions/tweetActions'

class Tweet extends React.Component{
	constructor(){
    super()
    this.state = {
    }
  }

  renderLike(tweet){

    // console.log(this.props)
    let liked = tweet.like.findIndex((user) => (user.user === sessionStorage._id)) !== -1
    if(liked){
      return <i className="fas fa-heart" onClick={() => this.props.unlikeTweet(tweet._id)}/>
    } else{
      return <i className="far fa-heart" onClick={() => this.props.likeTweet(tweet._id)}/>
    }
  
  }

	render(){

    let tweet = this.props.tweet
    // console.log(tweet)
		return(
			<section id="tweet">
				<div className="tweeter">
          <img src="/images/avatar.png"/>
          <span>{tweet.owner.name}</span>
        </div>
        <div className="tweet-content">
          {tweet.content}
        </div>
        <div className="tweet-footer">
          <div className="comment">
            <i className="far fa-comment"/>
            <span>{tweet.comments.length}</span>
          </div>
          <div className="like">
            {this.renderLike(tweet)}
            <span>{tweet.like.length}</span>
          </div>
        </div>
			</section>
		)
	}
}

function mapStateToDispatch(dispatch){
  return bindActionCreators({
    likeTweet: likeTweet,
    unlikeTweet: unlikeTweet
  }, dispatch)
}

export default connect(null, mapStateToDispatch)(Tweet)