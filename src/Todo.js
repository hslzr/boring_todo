import React, { useState } from 'react'

const Todo = (props) => {
  
  const [completed, setCompleted] = useState(props.task.completed)

  const handleClick = () => {
    setCompleted( !completed )
  }

  return (
    <li className="flex content-stretch">
      <div
        className={"br2 ph3 pv2 mb2 " + (completed ? 'bg-near-white' : 'bg-light-gray')}
        style={{flexGrow: 2}}
        onClick={handleClick}>
        <input
          className={"pa2 bn " + (completed ? 'bg-near-white silver strike' : 'bg-light-gray near-black')}
          value={props.task.text}
          //disabled={ !completed }
          //readOnly={completed}
          style={{outline: 0}}
          onChange={() =>{}} />
      </div>
      <div
        className="br2 pa3 pointer mb2 ml2 dim bg-near-white red">
        Del
      </div>
    </li>
  )
}

export default Todo
