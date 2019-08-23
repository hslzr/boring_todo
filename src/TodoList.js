import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return(
      <div className="pa4-l pa3">
        <ul className="list pl0 ml0 mw7 b--light-silver br2" >
          {this.props.tasks.map((task, index) => <Todo task={task} key={index} /> )}
        </ul>
      </div>
    )
  }
}
