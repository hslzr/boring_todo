import React from 'react'
import { Check, Trash } from 'react-feather'

const Todo = (props) => {

  const completeTask = () => {
    props.task.completed = !props.task.completed
    props.updateTask(props.index, props.task)
  }

  const handleChange = (event) => {
    props.task.text = event.target.value
    props.updateTask(props.index, props.task)
  }

  return (
    <li className="flex content-stretch todo-item">
      <div
        className="todo-complete-button bg-green near-white br2 ph3 pv1 pointer mb2 mr2 dim flex items-center"
        onClick={completeTask}>
        <Check  />
      </div>
      <div
        className={"todo-content br2 ph3 pv1 mb2 " + (props.task.completed ? 'bg-near-white' : 'bg-light-gray')}
        style={{flexGrow: 2}}>
        <textarea
          style={{outline: 0, resize: 'none'}}
          onChange={handleChange}
          value={props.task.text}
          disabled={props.task.completed}
          className={"pa2 bn w-100 " + (props.task.completed ? 'bg-near-white silver strike' : 'bg-light-gray near-black')}>
        </textarea>
      </div>
      <div
        onClick={() => props.deleteTask(props.index) }
        className="br2 ph3 pv1 pointer mb2 ml2 dim bg-near-white red flex items-center">
        <Trash size={18} />
      </div>
    </li>
  )
}

export default Todo
