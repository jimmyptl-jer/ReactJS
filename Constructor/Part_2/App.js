import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn : true
    }
  }


  render(){
    let WordDisplay
    if (this.state.isLoggedIn === true) {
      WordDisplay = "in"
      
    }
    else{
      WordDisplay = "out"
    }

    return(
      <div>
        <h3>Your are currently logged {WordDisplay}</h3>
      </div>
    )
}
}

export default App