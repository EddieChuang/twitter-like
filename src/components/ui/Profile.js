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
					<div id="tab">
						<ul>
						<li><a href="#tab-following">Following</a></li>
						<li><a href="#tab-follower">Follower</a></li>
						</ul>
						<div className="tab-following-content">
							Following ...
						</div>
						<div className="tab-follower-content">Follower ...</div>
					</div>
				</div>
			</section>
		)
	}

}

export default Profile