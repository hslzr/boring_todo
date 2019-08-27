import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return(
    <div className="pa4-l pa3">
      <div className="mw7 center">
        <button 
          onClick={props.clearTasks}
          style={{outline: 0}}
          className="bn pa1 red dim">
          Clear Tasks
        </button>
      </div>
      <ul className="list pl0 ml0 mw7 b--light-silver br2 center" >
        {props.tasks.map((task, index) => <Todo task={task} key={index} />)}
      </ul>
    </div>
  )
}

export default TodoList
