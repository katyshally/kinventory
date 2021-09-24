import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navBar'; 
import Home from './pages/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
     <Navigation />
    <Switch>
      <Route exacte path="/" exact component={Home} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
