"use strict"
import React from 'react'

class Banner extends React.Component{

  constructor(){
    super()
  }

  render(){

    return(
        <section id="banner">
          <div id="banner-box">
            <h1 id="banner-title">Join and Follow</h1>
            <div className="banner-underline"></div>
            <h3 className="banner-subtitle">Sign up and enjoy new social experience</h3>
            <a href="/signup" id="link-signup">Sign Up</a>
            <a href="/signin" id="link-signin">Sign In</a>
          </div>
        </section>
    )
    

  }

}

export default Banner