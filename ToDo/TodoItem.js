import React from "react"

const TodoItem = (props) =>{
  return(
    <form className="todo-item">
      <input type="checkbox" checked={props.task.completed} 
      onClick={()=>props.handleTheChange(props.task.id)}/>
      <p>
        Task:{props.task}
      </p>
      
    </form>
  )
};

export default TodoItem;