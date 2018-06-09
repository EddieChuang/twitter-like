"use strict"
import React from 'react'
import {Followings, Followers} from '.'
import tweet from '../../utils/tweet'

class Profile extends React.Component{
	constructor(){
    super()
    this.state = {
      user: null
    }

  }
  
  componentWillReceiveProps(props){
    this.setState({user: props.user})    
  }

	componentDidMount(){
    window.location.href = '#tab-following' // init tab
  }

	render(){

    let empty_user = {_id: '', name: '', email: '', photo: '', tweets: [], followering: [], followers: []}
    let user = this.state.user === null ? empty_user : this.state.user
    let isFollowed = tweet.isFollowed(user)
		return(
			<section id="profile">
				<div className="profile-image">
					<a><img src={user.photo}/></a>
				</div>
				<div className="profile-name">
          {isFollowed ? 
            (<span><i className="fas fa-user-check" onClick={this.unFollow}/></span>) : 
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
            <Followings />
            <Followers />

					</div>
				</div>
			</section>
		)
	}

}

export default Profile