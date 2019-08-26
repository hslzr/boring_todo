import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const App = () => {

  const [tasks, setTasks] = React.useState([])

  const addTodo = (todoText) => {
    setTasks([...tasks, {text: todoText, completed: false}])
  }

  return(
    <div className="sans-serif">
      <header className="db mw7 pv2 ph3 mt3 center">
        <h1 className="ma0">Henlo, fren</h1>
      </header>
      <TodoForm onSubmit={addTodo} />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default App
