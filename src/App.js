import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Inschrijven from './pages/Inschrijven.jsx';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/inschrijven" component={Inschrijven}/>
       </div>
     </Router>
    );
  }
}

export default App;
