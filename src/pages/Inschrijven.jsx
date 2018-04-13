import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Inschrijven extends Component {
  render() {
    return (
      <div>
      <Navbar />
       <Jumbotron title="DOE MEE" />
        <div className="container">
         <h2>Schrijf je in</h2>
          <p>Form</p>
        </div>
      <Footer />
      </div>
    );
  }
}

export default Inschrijven;
