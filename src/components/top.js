import React, { useState, useEffect } from 'react';
import "./list.css";
import "./top.css";

function Top () {
    const [album, setAlbum] = useState([]);
    const [top, setTop] = useState(true);
    

    useEffect(() => {
      fetch("https://api.jsonbin.io/b/617c50e79548541c29ca6cff/6")
        .then(response => response.json())
        .then(result => setAlbum(result.slice(6,10)))
        .catch(err =>{ console.error(err => console.error(err))}); 
      }, []);
     
    

    return (
        <div> <h1> Current Top Five Albums</h1>
        
        {album.map((album) => (
        <div className = "listContainer" key={album.id}> 
         
        <h1>{album.artist} </h1>
        <h2>Album: {album.album}</h2>
        <div className = "appleMusic"><h2>Listen On: <a href={album.itunes}><img src="imgs/appleMusic.png" alt="Apple Music"/></a></h2> </div>
        
        <div className = "imageContainer"><img src={`imgs/${album.image}`} alt ={album.album}/>
            <div className = "centered"> <p>Version: {album.version} 
                <br/>
                Signed: {album.signed}</p>
            </div>
        </div> 
        
        </div>
         ))}
             
            
        </div>
        )
    
    };

export default Top;