import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return(
    <header className="w-100 bg-near-black" >
      <nav className="bb center mw7">
        <Link to="/" className="f6 f5-l link near-white dib pa3 ">
          Home
        </Link>
        <Link to="about" className="f6 f5-l link near-white dib pa3 ">
          About
        </Link>
        <Link to="nuevo" className="f6 f5-l link near-white dib pa3 ">
          Otra
        </Link>
        <Link to="sobresalir" className="f6 f5-l link near-white dib pa3 ">
          Parte
        </Link>
        <Link to="dientes" className="f6 f5-l link near-white dib pa3 ">
          Arte
        </Link>
      </nav>
    </header>
  )
}

