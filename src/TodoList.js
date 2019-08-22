import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return(
      <div className="pa4-l">
        <ul className="list pl0 ml0 mw7 b--light-silver br2" >
          {this.props.tasks.map(task => <Todo task={task} /> )}
        </ul>
      </div>
    )
  }
}
