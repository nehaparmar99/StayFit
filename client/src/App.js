import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar'
import Opening from './components/Opening'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import TaskList from './components/List'

import Dashboard from "./components/Dashboard"
import "./App.css"
class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <Route exact path="/" component={Opening} />
          <div className="container bg">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/list" component={TaskList} />
             <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
