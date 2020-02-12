import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import './Main.scss'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main id="main-content">
    <Switch>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
    </Switch>
  </main>
)

export default Main
