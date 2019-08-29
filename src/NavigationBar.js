import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return(
    <header className="w-100 bg-near-black" >
      <nav className="bb center mw7">
        <NavLink activeClassName="is-active" exact to="/" className="f6 f5-l link near-white dib pa3">
          Home
        </NavLink>
        <NavLink activeClassName="is-active" to="/about" className="f6 f5-l link near-white dib pa3">
          About
        </NavLink>
        <NavLink activeClassName="is-active" to="dientes" className="f6 f5-l link near-white dib pa3">
          Arte
        </NavLink>
      </nav>
    </header>
  )
}

