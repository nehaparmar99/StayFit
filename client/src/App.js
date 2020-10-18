import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/NavBar'
import Opening from './components/Opening'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import TaskList from './components/List'
import Dashboard from "./components/Dashboard"
// import "./App.css"
import Main from './components/Main';
import Dashboardd from './components/Dashboardd';
import TodoList from './components/TodoList';
class App extends Component {
  render () {
    return (
      <Router>
          <Route exact path="/" component={Opening} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
             <Route exact path="/list" component={TaskList} />
            {/* <Route exact path="/dashboard" component={Dashboardd} />  */}
                <Route exact path="/dashboard" component={Dashboardd} />
        {/* <Route exact path="/todos" component={TodoList}></Route> */}
      </Router>
    );
  }
}

export default App;
