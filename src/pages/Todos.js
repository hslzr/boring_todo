import React from 'react'

import TodoForm from '../TodoForm'
import TodoList from '../TodoList'


const initialTasks = {
  2134: {text: 'Demo 1', completed: false},
  2135: {text: 'Demo 2', completed: false},
  2136: {text: 'Demo 3', completed: false}
}

export default () => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem('localTasks')) || initialTasks
  )

  const addTodo = (todoText) => {
    let current_ts = (new Date()).getTime()
    let stateCopy = Object.assign({}, tasks)
    stateCopy[current_ts] = {text: todoText, completed: false }
    setTasks(stateCopy)
  }

  const updateTask = (targetIndex, targetTask) => {
    let stateCopy = Object.assign({}, tasks)
    stateCopy[targetIndex] = targetTask
    setTasks(stateCopy)
  }

  const deleteTask = (taskIndex) => {
    let stateCopy = Object.assign({}, tasks)
    delete stateCopy[taskIndex]
    setTasks(stateCopy)
  }

  const clearTasks = () => {
    setTasks({})
  }

  React.useEffect(() => {
    localStorage.setItem('localTasks', JSON.stringify(tasks))
  }, [tasks])

  return(
    <div>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        tasks={tasks}
        onUpdate={updateTask}
        deleteTask={deleteTask}
        clearTasks={clearTasks} />
    </div>
  )
}
