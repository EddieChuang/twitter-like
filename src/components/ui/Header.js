"use strict"
import React from 'react'

class Header extends React.Component{

  constructor(){
    super()
  }

  render(){

    return(
      <header id="header">
        <nav>
          <div id="nav-top">
            <div id="logo">
              <i className="fa fa-twitter"/>
              <span>Twitter-like</span>
            </div>
            <div id="menu-btn">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <ul id="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tweet</a></li>
          </ul>
        </nav>

        <section id="banner">
          <div id="banner-box">
            <h1 id="banner-title">Join and Follow</h1>
            <div className="banner-underline"></div>
            <h3 className="banner-subtitle">Signup and enjoy new social experience</h3>
            <button className="signup-btn">Signup</button>
            <button className="signin-btn">Signin</button>
          </div>
        </section>
        

      </header>
    )
    

  }

}

export default Header