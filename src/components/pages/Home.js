"use strict"
import React from 'react'
import { Header, Banner } from '../ui'

class Home extends React.Component{
  
  render(){

    return(
      <div id="home">
        {/* <header> */}
          <Header/>
        {/* </header> */}
        {/* <article> */}
          <Banner/>
        {/* </article> */}
      </div>
    )

  }
}

export default Home