import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

  const renderTodos = (tasks) => {
    return tasks.map((task) => {
      return(
        <Todo 
        task={task}
        key={task.index}
        deleteTask={props.deleteTask}
        updateTask={props.onUpdate} />
      )
    })
  }

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
      <ul className="list pl0 ml0 mw7 b--light-silver br2 center">
        {renderTodos(props.tasks)}
      </ul>
    </div>
  )
}

export default TodoList
