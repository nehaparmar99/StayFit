import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul className="footer-menu">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li><a href="#" className="fa fa-facebook"></a></li>
                  <li><a href="#" className="fa fa-twitter"></a></li>
            </ul>
            {/* <ul className="right">
            <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              </ul> */}
            <p className="copyright text-center">
              © 2020
          </p>
            
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer