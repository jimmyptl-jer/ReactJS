import React, { Component } from "react"

import Conditional from "./Conditional"

class App extends Component {
  constructor(){
    super()
    this.state={
      unreadMessage:[
        "Hello World",
        "Good Morning"
      ]
    }
  }


  render(){
    return(
      <div>
      {
        this.state.unreadMessage.length > 0 && 
        <h1>You have {this.state.unreadMessage.length} unread messages </h1>
      }
        

      </div>
    )
  }


  
}

export default App;