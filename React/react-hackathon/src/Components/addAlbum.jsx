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



        // Title: "",
        // Artist: "",
        // Track_Number: "",
        // Label: "",
    
    return(
        <div>

        </div>
    );
};

export default AddAlbum;