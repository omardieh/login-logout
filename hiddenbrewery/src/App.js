import './App.css';
import FakeHome from './Pages/FakeHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Component} from 'react'

export default class App extends Component {
  

  render() {
    
        
  return (
    <Router>
      <Switch>
        <Route path='/' component={FakeHome} exact />
      </Switch>
    </Router>)
  }
}
