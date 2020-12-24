import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name:"Jimmy",
      age:21
    }
  }


  render(){
    return(
      <div style={{color:"white",backgroundColor:"red"}}>
        <h3>Myself {this.state.name} Patel </h3> 
        <h3>My age is {this.state.age}</h3>
      </div>      
    )
  }
}

export default App;