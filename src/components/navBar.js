import React, { useState } from 'react';
import classes from "./navBar.css";
//import Button from "./Button";
import App from '../App';
import ReorderIcon from '@material-ui/icons/Reorder';


function Navigation () {

const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className = {classes.nav}>

      <div className ="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
        <a href="/home">Home</a>
        <a href="/list">List</a>
        <a href ="/topfive">Top 5</a>
        <a href ="/form">Form</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}><ReorderIcon /></button>
      </div>
      <div className ="rightSide"></div>
    
     


      
    
    </nav>
  )
};


export default Navigation;