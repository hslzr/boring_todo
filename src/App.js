import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const InitialTasks = [
  {index: 2134, text: 'Demo 1', completed: false},
  {index: 2135, text: 'Demo 2', completed: false},
  {index: 2136, text: 'Demo 3', completed: false},
]

const App = () => {

  const [tasks, setTasks] = React.useState(InitialTasks)

  const addTodo = (todoText) => {
    let current_ts = (new Date()).getTime()
    setTasks([...tasks, {index: current_ts, text: todoText, completed: false}])
  }

  const updateTask = (taskIndex) => {
    // TODO
  }

  const deleteTask = (taskIndex) => {
    setTasks( tasks.filter(item => item.index !== taskIndex) )
  }

  const clearTasks = () => {
    setTasks([])
  }

  const findTask = (taskIndex) => {
    let taskFound = tasks.find(task => task.index === taskIndex)
    if (taskFound === undefined) {
      console.error("No task found. Why? idk. You passed: " + taskIndex)
      return undefined
    }

    return taskFound
  }

  return(
    <div className="sans-serif">
      <header className="db mw7 pv2 ph3 mt3 center">
        <h1 className="ma0">Henlo, fren</h1>
      </header>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        tasks={tasks}
        onUpdate={updateTask}
        deleteTask={deleteTask}
        clearTasks={clearTasks} />
    </div>
  )
}

export default App
