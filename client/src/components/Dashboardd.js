import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Main from './Main'
import "./Dashboardd.css"
import TodoList from './TodoList'
class Dashboardd extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
        </Router>
      </div>
    )
  }
}

export default Dashboardd