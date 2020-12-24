import React, { Component } from "react"



class App extends Component {
  constructor(){
    super()
    this.state={
      count:0,
      sum:1
    }
    //Bind is used to bind the method with class because setSate gives errors 
    this.butt = this.butt.bind(this)
    this.sum = this.sum.bind(this)
  } 

    butt(){
      this.setState((prevState)=>{
        return{
          count:prevState.count + 1
        }

      })
    }

    sum(){
      this.setState((pre)=>{
        return{
          sum:pre.sum + this.state.sum
        }
      })
    }

      

  render(){
    return(
      <div style={{backgroundColor:"red",textAlign:"center"}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.butt}>Change</button>
        <h1>{this.state.sum}</h1>
        <button onClick={this.sum}>Sum</button>

      </div>
    )
  }


  
};

export default App;