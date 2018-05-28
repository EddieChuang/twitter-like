"use strict"
import React from 'react'

class Header extends React.Component{

  constructor(){
    super()
  }

  render(){

    return(
      // <header id="header">
        <nav id="nav-container">
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
            <li><a href="/home">Home</a></li>
            <li><a href="#">Tweet</a></li>
          </ul>
        </nav>
        

      // </header>
    )
    

  }

}

export default Header