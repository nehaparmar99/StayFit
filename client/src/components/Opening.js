import React, { Component } from 'react'
import home from "./home1.jpg"
import './opening.css';
import { Link, withRouter } from 'react-router-dom'
class Landing extends Component {
    render () {
        return (
            <div>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO STAYFIT</h1>
                    </div>
                </div>
                 <ul className="navbar-nav">
                <li className="nav-item">
                    <div>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div>
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div>
                    <Link to="/list" className="nav-link">
                        List
                    </Link>
                    </div>
                </li>
                {/* <li className="nav-item">
                    <div>
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                    </div>
                </li> */}
            </ul>
            </div>
            <div id ="bg">
                <img id="imgi" src={home}></img>
            </div>
            </div>
        )
    }
}

export default Landing