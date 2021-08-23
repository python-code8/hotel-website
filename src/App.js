import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Accommodation from './components/Accommodation'
import Dining from './components/Dining';
import Banquet from './components/Banquet';
import Footer from './components/Footer';
function App() {
  return (
    <div className='appmain'>
      <Router>
        <Navbar />
        <Home />
        <div className='accommodation'><Accommodation /></div>
        <div className='dining'><Dining /></div>
        <div className='banquet'><Banquet /></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
