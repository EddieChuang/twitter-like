"use strict"
import React from 'react'

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
    console.log(this.state.user)
    let empty_user = {_id: '', name: '', email: '', photo: '', tweets: []}
    let user = this.state.user === null ? empty_user : this.state.user
		return(
			<section id="profile">
				<div className="profile-image">
					<a><img src={user.photo}/></a>
				</div>
				<div className="profile-name">
					<span>{user.name}</span>
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
						<div className="tab-content tab-content-following">
							{/* renderFollowing() */}
							<div className="following-user">
								<img src="/images/avatar.png"/>
								<span>chiamin</span>
							</div>
							<div className="following-user">
								<img src="/images/avatar.png"/>
								<span>calleigh</span>
							</div>
						</div>
						<div className="tab-content tab-content-follower">
							{/* renderFollower() */}
							<div className="follower-user">
								<img src="/images/avatar.png"/>
								<span>chiamin</span>
							</div>
							<div className="follower-user">
								<img src="/images/avatar.png"/>
								<span>calleigh</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

}

export default Profile