import React from 'react'
import { Check, Trash } from 'react-feather'

const Todo = (props) => {
  
  const [completed, setCompleted] = React.useState(props.task.completed)

  const completeTask = () => {
    setCompleted( !completed )
  }

  const handleChange = (event) => {
    props.task.text = event.target.value
    props.updateTask(props.task)
  }

  return (
    <li className="flex content-stretch">
      <div
        className="bg-green near-white br2 ph3 pv1 pointer mb2 mr2 dim flex items-center"
        onClick={completeTask}>
        <Check  />
      </div>
      <div
        className={"br2 ph3 pv1 mb2 " + (completed ? 'bg-near-white' : 'bg-light-gray')}
        style={{flexGrow: 2}}>
        <input
          className={"pa2 bn " + (completed ? 'bg-near-white silver strike' : 'bg-light-gray near-black')}
          value={props.task.text}
          //disabled={ !completed }
          //readOnly={completed}
          style={{outline: 0}}
          onChange={handleChange} />
      </div>
      <div
        onClick={() => props.deleteTask(props.task.index) }
        className="br2 ph3 pv1 pointer mb2 ml2 dim bg-near-white red flex items-center">
        <Trash size={20} />
      </div>
    </li>
  )
}

export default Todo
