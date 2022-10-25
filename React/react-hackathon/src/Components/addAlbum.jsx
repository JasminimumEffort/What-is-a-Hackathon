import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import Album from './albumTemplate';


const AddAlbum = () => {
    
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [artist, setArtist] = useState("");
    const [trackno, setTrackno] = useState("");
    const [albumData, setAlbumData] = useState({});
    const [id, setId] = useState("");
    const [allAlbums, setAllAlbums] = useState([]);

    const updateTitle = (event) => {
    event.preventDefault(); 
    setTitle(event.target.value);
    };

    // useEffect(() => {
       
    //  }
    // GetDeets()}, [title]);

    const GetDeets = async () => {
        try{
            const res = await axios.get("http://localhost:1296/GetAllAlbums");
            console.log("Response:", res);
            setAllAlbums(res.data);
        }catch(err){

        }};

    const AddDeets = async () => {
        try{await setAlbum()
            const res = await 
            axios.post("http://localhost:1296/createAlbum", albumData);
        console.log("Response:", res);
        setAlbumData(res.data);
        } catch(err){

        }
    }

    const editDeets = async () => {
        try{
            const res = await axios.patch("http://localhost:1296/updateAlbum" + id, albumData)
            console.log("Response:", res);
            setAlbumData(res.data);
        }catch(err){

        }
    }

    const deleteAlbum = async () => {
        try{
            const res = await axios.delete("http://localhost:1296/removeAlbum" + id)
            console.log("Response:", res);
            setAlbumData(res.data);
        }catch(err){

        }
    }

    const setAlbum = async () => {
        const tempData = {
            "title": title,
            "artist": artist,
            "track_total": trackno,
            "label": label
        }
        await setAlbumData(tempData);
        console.log(albumData);
    }

    const bigClick = async () => {
        // AddDeets();
        GetDeets();
    }

        // Title: "",
        // Artist: "",
        // Track_Number: "",
        // Label: "",
    
    return(
        <div>
             <form>
            Add an Album:
            <div className = "form-group">
                <label> Album name: </label>
                <input type="text" className="form-control" id = "AlbumName" onChange = {(e) => {setTitle(e.target.value)}} />
                <br/>
                <label> Album Artist: </label>
                <input type="text" className="form-control" id = "AlbumArtist" onChange = {(e) => {setArtist(e.target.value)}}/>
                <br/>
                <label> Total Tracks: </label>
                <input type="text" className="form-control" id = "AlbumTrackTotal" onChange = {(e) => {setTrackno(e.target.value)}} />
                <br/>
                <label> Record Label: </label>
                <input type="text" className="form-control" id = "AlbumLabel" onChange = {(e) => {setLabel(e.target.value)}} />
                <br/>
                <br/>
                <button type = "submit" onClick = {bigClick}>CREATE ALBUM</button>
            </div>
        </form>

        <div className="row row-cols-3 g-4">
                {allAlbums.map((album) => (
                    <Album
                        key={album.id}
                        title={album.title}
                        artist={album.artist}
                        label={album.label}
                        trackno={album.trackno}
                    />

                ))}
        </div>
        </div>
    );
};

export default AddAlbum;