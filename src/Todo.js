import React from 'react'

const Todo = (props) => {
  return (
    <li className="br2 bg-light-gray ph3 pv2 mb2">
      <p>{props.task.text}</p>
    </li>
  )
}

export default Todo
