import React, { useState } from 'react'

const Todo = (props) => {
  return (
    <li className="pa3 bb b--light-silver">
      <h4>{props.task.title}</h4>
      <p>{props.task.text}</p>
    </li>
  )
}

export default Todo
