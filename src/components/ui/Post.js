"use strict"
import React from 'react'

class Post extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<section id="post">
				<div className="poster">
          <img src="/images/avatar.png"/>
          <span>chiamin</span>
        </div>
        <div className="post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, lorem finibus accumsan dictum, sapien dolor lacinia est, ut pharetra nulla erat et tortor. Ut ac urna ultricies, auctor enim eget, porttitor turpis. Donec eros enim, suscipit ut pulvinar ac, tempus id sapien. In bibendum hendrerit quam eu commodo. Nulla et mi id velit mattis tristique
        </div>
        <div className="post-footer">
          <div className="comment">
            <i className="far fa-comment"/>
            <span>10</span>
          </div>
          <div className="like">
            <i className="far fa-heart"/>
            <span>10</span>
          </div>
        </div>
			</section>
		)
	}

}

export default Post