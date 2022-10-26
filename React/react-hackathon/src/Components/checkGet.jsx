import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import Album from './albumTemplate'

const GetAlbums = () => {
    
    const [allAlbums, setAllAlbums] = useState([]);

    useEffect(() => {
    const getAl = async () => {

    try{
        const res = await axios.get('http://localhost:1296/GetAllAlbums');
        const inf = res.data
        setAllAlbums(inf);

    } catch(err){
        console.log(err);
    }
    };
    getAl();
    },[]);

    return(
            <div>
                <p>
                    test
                </p>
                <div className="row row-cols-3 g-4">
                {allAlbums.map((album) => (
                    <Album
                        key = {album.id}
                        title={album.title}
                        artist={album.artist}
                        label={album.label}
                        trackno={album.track_total}
                    />

                ))}
                 </div>
            </div>
        )
    };

export default GetAlbums;