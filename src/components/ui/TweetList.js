"use strict"
import React from 'react'
import axios from 'axios'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Tweet } from '../ui'

class TweetList extends React.Component{
	
	constructor(){
    super()
    this.state ={
      user: null,
      tweets: [],
      matched: []
    }

    this.filter = this.filter.bind(this)
    this.renderTweet = this.renderTweet.bind(this)
  }

  componentDidMount(){

    let user = this.props.user
    axios.get('tweet/')
      .then((res) => {
        let tweets  = res.data.tweets
        let matched = tweets 

        this.setState({user, tweets, matched})
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  
  

  componentWillReceiveProps(props){

    console.log('TweetList componentWillReceiveProps', props)
    let tweets  = this.state.tweets
    let tweetToUpdate = props.tweet
    let indexToUpdate = tweets.findIndex((tweet) => (tweet._id === tweetToUpdate._id))

    if(indexToUpdate === -1){
      tweets = [tweetToUpdate, ...tweets]
    } else{
      tweets = [...tweets.slice(0, indexToUpdate), tweetToUpdate, ...tweets.slice(indexToUpdate + 1)]
    }
    let matched = tweets 
    this.setState({tweets, matched})
  }

  filter(e){
    
    Array.from(document.getElementsByClassName("btn-filter")).forEach((ele, i) => {
      ele.classList.remove("filter-active")
    })
    e.target.classList.add("filter-active")
    let filter  = e.target.innerText
    let tweets  = this.state.tweets
    let matched = tweets.reduce((accumulator, tweet, currIndex) => {
      if(filter === 'All'){
        accumulator.push(tweet)
      } else if(filter === 'Following'){
        let isFollowed = this.state.user.followings.find((following, i) => {
          return following._id === tweet.owner._id
        })
        if(isFollowed){
          accumulator.push(tweet)
        }

      } else if(filter === 'My'){
        if(tweet.owner._id === this.state.user._id){
          accumulator.push(tweet)
        }
      }
      return accumulator
    }, []) 
    this.setState({matched})
  }

  renderTweet(){
    let matched = this.state.matched
    let user    = this.state.user
    let tweets   = matched.map((tweet, i) => {
      return <Tweet tweet={tweet} user={user} key={tweet._id}/>
    })
    return tweets
  }

	render(){

		return(
			<section id="tweetList">
        <div className="tweetList-header">
          <button className="btn-filter filter-active" onClick={this.filter}>All</button>
          <button className="btn-filter" onClick={this.filter}>Following</button>
          <button className="btn-filter" onClick={this.filter}>My</button>
        </div >
        <div className="tweetList-body">
          {this.renderTweet()}
        </div>
			</section>
		)
	}

}

function mapStateToProps(state){
  return {
    tweet: state.tweet.tweet
  }
}
 
export default connect(mapStateToProps)(TweetList)