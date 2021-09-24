import React, { useState } from 'react';
import classes from "./navBar.css";
//import Button from "./Button";
import App from '../App';


const Navigation = (props) => {


  return (
    <nav className = {classes.nav}>

      <div className ="leftSide">
        <div className="links">
        <a href="/home">Home</a>
        <a href="/list">List</a>
        <a href ="/topfive">Top 5</a>
        <a href ="/form">Form</a>
        </div>
      </div>
      <div className ="rightSide"></div>
    
     


      
    
    </nav>
  )
};


export default Navigation;
