import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";

class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link className="navbar-brand" to="/">
                <img className="img-fluid" src={logo} alt="Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rooms">Rooms</Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
            </div>
        )
    }
}

export default Navbar;
