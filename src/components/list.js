import React, { useState } from 'react';

import App from '../App';
import classes from './list.css'



const List = props => {
    const { albumData } = props;
    
    return (
        <div className={classes.container}>
            {albumData.map(album =>
                <div className={classes.album} key={album.artist}  id={album.album}>
                    <h2>{album.artist}</h2>
                    <p>{album.album}</p>

                    {/* <img src={`images/comics/${comic.image}`} 
                    onError={(e)=>{e.target.onerror = null; 
                    e.target.src="images/comics/not_released.png"}} 
                    alt={comic.title} />  */}
                    {/* Uses filler image when there's no matching image in the folder */}
                </div>
            )}
            
        </div>
    )
};

export default List;