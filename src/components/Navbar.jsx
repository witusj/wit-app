import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../images/msi-logo.png'

class Navbar extends Component {
  render() {
    return (
     <div className="container">
      <nav class="navbar navbar-expand-md">
        <Link class="navbar-brand" to="/"><img src={Logo} alt=""/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="inschrijven">Inschrijven</Link>
            </li>
          </ul>
        </div>
      </nav>
     </div>
    );
  }
}

export default Navbar;
