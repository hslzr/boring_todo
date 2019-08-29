import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './NavigationBar'

import TodosScreen from './pages/Todos'
import AboutScreen from './pages/About'
import ArtScreen from './pages/Art'

const App = () => {

  return(
    <div className="sans-serif">
      <Router>
        <NavigationBar />
        <header className="db mw7 pv2 ph3 mt3 center">
          <h1 className="ma0">Henlo, fren</h1>
        </header>
        <Route exact path="/" component={TodosScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/art" component={ArtScreen} />
      </Router>
    </div>
  )
}

export default App
