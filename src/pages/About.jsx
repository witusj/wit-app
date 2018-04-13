import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
      <Navbar />
       <Jumbotron title="WIJ ZIJN MSI" />
        <div className="container">
         <h2>Why?</h2>
          <p>Why?</p>
          <h2>How?</h2>
          <p>How?</p>
          <h2>What?</h2>
          <p>What?</p>
        </div>
      <Footer />
      </div>
    );
  }
}

export default About;
