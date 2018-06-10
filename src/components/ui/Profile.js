"use strict"
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Followings, Followers } from '.'
import { follow } from '../../actions/userActions'
import tweet from '../../utils/tweet'

class Profile extends React.Component{
	constructor(){
    super()
    this.state = {
      user: null
    }
    this.onFollow = this.onFollow.bind(this)
    this.onUnFollow = this.onUnFollow.bind(this)
    
  }
  
  // componentWillReceiveProps(props){
  //   this.setState({user: props.user})    
  // }

	componentDidMount(){
    window.location.href = '#tab-following' // init tab
  }

  onFollow(){
    this.props.follow(this.props.user._id)
  }

  onUnFollow(){

  }

	render(){

    // let empty_user = {_id: '', name: '', email: '', photo: '', tweets: [], followering: [], followers: []}
    let user = this.props.user// === null ? empty_user : this.state.user
    let isFollowed = tweet.isFollowed(user)
		return(
			<section id="profile">
				<div className="profile-image">
					<a><img src={user.photo}/></a>
				</div>
				<div className="profile-name">
          {isFollowed ? 
            (<span><i className="fas fa-user-check" onClick={this.onUnFollow}/></span>) : 
            (<span><i className="fas fa-user" onClick={this.onFollow}/></span>)}
          <span><a href={`/home?id=${user._id}`}>{user.name}</a></span>
				</div>
				<hr/>
				<div className="profile-email">
					<i className="fa fa-envelope"/>
					<span>{user.email}</span>
				</div>
				<hr/>
				<div className="profile-activity">
				 	{/* display: none */}
					<span id="tab-following">Following</span>
					<span id="tab-follower">Follower</span>
					{/* display: none */}
					<div id="tab-container">
						<ul>
							<li><a className="tab-item tab-item-following" href="#tab-following">Following</a></li>
							<li><a className="tab-item tab-item-follower" href="#tab-follower">Follower</a></li>
						</ul>
            <Followings user={user}/>
            <Followers user={user}/>

					</div>
				</div>
			</section>
		)
	}

}

function mapStateToProps(state){
  console.log('mapStateToProps', state)
  return {
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    follow: follow
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)