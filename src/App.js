import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class App extends React.Component {

  state = {
    tasks: [
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
      {title: "demo DEMO", text: "skdjfhksdjhf"},
    ]
  }

  render() {
    return(
      <div className="sans-serif">
        <header className="db mw8 pa2 ph3 center mt3">
          <h1 className="ma0">Henlo, fren</h1>
        </header>
        <TodoForm />
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }
}
