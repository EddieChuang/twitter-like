"use strict"
import React from 'react'

class Profile extends React.Component{
	constructor(){
		super()
	}

	componentDidMount(){
		window.location.href = '#tab-following' // init tab
	}

	render(){
		return(
			<section id="profile">
				<div className="profile-image">
					<a><img src="/images/avatar.png"/></a>
				</div>
				<div className="profile-name">
					<span>chiamin</span>
				</div>
				<hr/>
				<div className="profile-email">
					<i className="fa fa-envelope"/>
					<span>example@example.com</span>
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