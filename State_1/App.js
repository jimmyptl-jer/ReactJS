import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      answer:"Yess"
    }

  }


  render(){
    return(
      <div>
        <h3>State {this.state.answer}</h3>
      </div>

      
    )
  }
}

export default App;