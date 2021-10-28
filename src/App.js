import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navBar'; 
import Home from './pages/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from './components/list';
import Form from './components/form';
import Top from './components/top';



function App() {
  return (
    <div className="App">
    <Router>
     <Navigation />
    <Switch>
      <Route exacte path="/" exact component={Home} />
      <Route exacte path="/list" exact component={List} />
      <Route exacte path="/form" exact component={Form} />
      <Route exacte path="/topfive" exact component={Top} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
