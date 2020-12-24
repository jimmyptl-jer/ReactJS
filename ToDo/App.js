import React, { Component } from "react"

import TodoItem from './TodoItem'
import TodoData from './TodoData'


class App extends Component {
  constructor(){
    super()
    this.state={
      todos:TodoData
   }
   this.handleTheChange = this.handleTheChange.bind(this)
  }

  handleTheChange(id){
    this.setState(preState =>{
      const updatedTodos = preState.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos:updatedTodos
      }
      
    })


  }


  render(){

  const todo = this.state.todos.map(to_do =>{
    return(
      <TodoItem key={to_do.key}
      task={to_do.task}
        handleTheChange={this.handleTheChange}/>

    )
  })

  return(
    <div>
    <h1>Todo</h1>
    {
      todo
    }

    </div>
  )
  }

  
};

export default App;