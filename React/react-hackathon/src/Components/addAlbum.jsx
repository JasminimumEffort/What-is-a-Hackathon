import React from 'react'; 
import axios from 'axios';
import { useState } from 'react';


const AddAlbum = () => {
    
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [artist, setArtist] = useState("");
    const [trackno, setTrackno] = useState("");
    const [albumData, setAlbumData] = useState([]);
    const [id, setId] = useState("");

    const updateTitle = (event) => {
    event.preventDefault(); 
    setTitle(event.target.value);
        };

    const GetDeets = async () => {
        try{
            const res = await axios.get("http://localhost:1296/GetAllAlbums");
            console.log("Response:", res);
        }catch(err){
            
        }
    }

    const AddDeets = async () => {
        try{ const res = await 
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
        setAlbumData 
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
                <button type = "submit">CREATE ALBUM</button>
            </div>

        </form>
        </div>
    );
};

export default AddAlbum;