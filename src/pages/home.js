import React, { useState } from 'react';
import classes from "./home.css";
//import Button from "./Button";
import App from '../App';




function Home () {
    return(
        <main className = {classes.homepage}>
            <h1>Want to bring your k-pop inventory to life?</h1>

            <img src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/iD77mYBz.png?output-format=jpg"></img>
            <p>
            Looking for an exciting way to manage your albums? Look no further! Here you can store every album with information, even a review or description!
            </p>
        </main>
    )
};

export default Home;