import React, { useState, useContext, useEffect } from 'react';
import AlbumList from './albumList';
import App from '../App';
import classes from './list.css'

function List () {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
      fetch("https://api.jsonbin.io/b/617c50e79548541c29ca6cff/5")
        .then(response => response.json())
        .then(result => setAlbum(result))
        .catch(err =>{ console.error(err => console.error(err))}); 
      }, []);
    
    return (
        <div> <h1>Album List</h1>
        <ul>
        {album.map(album => (
        <div className = "listContainer" key={album.id}> 
        
        <h1>{album.artist} </h1>
        <h2>Album: {album.album}</h2>
        
        <div className = "imageContainer"><img src={`imgs/${album.image}`} alt ={album.album}/>
            <div className = "centered"> <p>Version: {album.version} 
                <br/>
                Signed: {album.signed}</p>
            </div>
        </div>
        
        </div> ))}
        </ul>       
            
        </div>
        )
    };

export default List;