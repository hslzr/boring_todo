import React from 'react'

export default class TodoForm extends React.Component {
  render() {
    return(
      <div className="pa4-l" >
        <form className="bg-light-gray mw7 pa4 br2-ns" >
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-8" > Add a task </legend>
            <div className="cf">
              <input type="text" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Task" />
              <input type="submit" value="Add Task" className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
