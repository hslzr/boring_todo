import React from 'react'

import TodoForm from '../TodoForm'
import TodoList from '../TodoList'


const InitialTasks = [
  {index: 2134, text: 'Demo 1', completed: false},
  {index: 2135, text: 'Demo 2', completed: false},
  {index: 2136, text: 'Demo 3', completed: false},
]


export default () => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem('localTasks')) || InitialTasks
  )

  // Add tasks to the state array
  const addTodo = (todoText) => {
    let current_ts = (new Date()).getTime()
    setTasks([...tasks, {index: current_ts, text: todoText, completed: false}])
  }

  // Update a task
  const updateTask = (targetTask) => {
    setTasks(tasks.map(task => {
      if (task.index === targetTask.index) {
        return targetTask
      } else {
        return task
      }
    }))
  }

  // Delete a task
  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter(item => item.index !== taskIndex))
  }

  // Clear all tasks
  const clearTasks = () => {
    setTasks([])
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