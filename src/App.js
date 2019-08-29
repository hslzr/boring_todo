import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import AboutScreen from './pages/About'
import ArtScreen from './pages/Art'

const InitialTasks = [
  {index: 2134, text: 'Demo 1', completed: false},
  {index: 2135, text: 'Demo 2', completed: false},
  {index: 2136, text: 'Demo 3', completed: false},
]

const App = () => {

  const MainScreen = () => {
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


  return(
    <div className="sans-serif">
      <Router>
        <NavigationBar />
        <header className="db mw7 pv2 ph3 mt3 center">
          <h1 className="ma0">Henlo, fren</h1>
        </header>
        <Route exact path="/" component={MainScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/art" component={ArtScreen} />
      </Router>
    </div>
  )
}

export default App
