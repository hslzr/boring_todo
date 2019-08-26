import React, { useState } from 'react'

const Todo = (props) => {
  
  const [completed, setCompleted] = useState(props.task.completed)

  const handleClick = () => {
    setCompleted( !completed )
  }

  return (
    <li
      onClick={handleClick}
      className={"br2 ph3 pv2 mb2 " + (completed ? 'strike bg-near-white silver' : 'bg-light-gray near-black') }>
      <p>{props.task.text}</p>
    </li>
  )
}

export default Todo
