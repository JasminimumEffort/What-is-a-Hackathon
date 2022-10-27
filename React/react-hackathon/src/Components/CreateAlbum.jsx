import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Album from './Album';
import EditAlbum from './EditAlbum'
import { Button, Modal } from 'bootstrap';


const CreateAlbum = ({getAlbums}) => {

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [artist, setArtist] = useState("");
    const [track_total, setTrackno] = useState("");

    const AddDeets = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:1296/createAlbum", {
                title,
                artist,
                track_total,
                label
            });
            getAlbums();
            console.log("Response:", res);
        } catch (err) {

        }
    };

    return (
        <div>
            <form onSubmit={AddDeets}>
                Add an Album:
            <div className="form-group">
                    <label> Album name: </label>
                    <input type="text" className="form-control" id="AlbumName" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label> Album Artist: </label>
                    <input type="text" className="form-control" id="AlbumArtist" onChange={(e) => setArtist(e.target.value)} />
                    <br />
                    <label> Total Tracks: </label>
                    <input type="text" className="form-control" id="AlbumTrackTotal" onChange={(e) => setTrackno(e.target.value)} />
                    <br />
                    <label> Record Label: </label>
                    <input type="text" className="form-control" id="AlbumLabel" onChange={(e) => setLabel(e.target.value)} />
                    <br />
                    <button type="submit"><input class = "btn btn primary" type = "button" value ="Create Album"/></button>
                    
                </div>
            </form>
        </div>
    );
};

export default CreateAlbum;