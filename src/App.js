import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class App extends React.Component {

  state = {
    tasks: []
  }

  addTodo = (todo) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, {text: todo}]
    }))
  }

  render() {
    return(
      <div className="sans-serif">
        <header className="db mw8 pa2 ph4 center mt3">
          <h1 className="ma0">Henlo, fren</h1>
        </header>
        <TodoForm onSubmit={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }
}
