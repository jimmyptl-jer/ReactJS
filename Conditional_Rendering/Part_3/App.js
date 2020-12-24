import React, { Component } from "react"




class App extends Component {
  constructor(){
    super()
    this.state={
      isLoggedin:false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState =>{
      return{
        isLoggedin:!prevState.isLoggedin
      }
    })

  }
  render(){
    let buttonText = this.state.isLoggedin ? "Log Out" : "Log In"
    let displayText = this.isLoggedin ? "Logged In" : "Logged Out"
    return(
      <div>
        
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>

      </div>
    )
  }


  
};

export default App;