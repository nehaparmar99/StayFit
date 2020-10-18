import React, { Component } from 'react'
import Sidebar from "./Sidebar"
import Main from "./Main"
import Footer from './Footer'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
class Dashboardd extends Component {
  render() {
      return <div className="wrapper">
        <Navbar></Navbar>
          <Sidebar></Sidebar>
          <Dashboard></Dashboard>
        {/* <Main></Main> */}
        <Footer></Footer>
    </div>
  }
}

export default Dashboardd