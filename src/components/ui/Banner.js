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
            <h3 className="banner-subtitle">Signup and enjoy new social experience</h3>
            <a href="/signup" id="link-signup">Signup</a>
            <a href="/signin" id="link-signin">Signin</a>
          </div>
        </section>
    )
    

  }

}

export default Banner