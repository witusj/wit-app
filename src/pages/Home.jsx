import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
       <Jumbotron title="SMART YOURSELF" />
        <div className="container">
         <h2>Welkom bij MSI!</h2>
          <p>Ben jij klaar voor BV Nederland 4.0? Zie jij dat de arbeidsmarkt momenteel gunstig is voor mensen met een technische opleiding? Of denk jij dat alleen de kennis van Whatsapp met een bedrijfskundige opleiding genoeg is? Think again!</p>
          <p>De combinatie van business en ICT is de toekomst! Door nieuwe technologieën toe te passen zullen processen in de toekomst nog sneller verlopen en kun jij nóg sneller dan nu je bestelde pakketje ontvangen.</p>
          <p>Wil jij de verbinding zijn tussen bedrijfsprocessen en technologie? Wil jij organisaties helpen bouwen aan de toekomst? Wil je meehelpen om van Nederland een winnend team te maken? Schrijf je dan nu in voor de Minor Smart Industry. Met deze minor zijn jij en jouw bedrijf voorbereid op de toekomst.</p>
        </div>
      <Footer />
      </div>
    );
  }
}

export default Home;
