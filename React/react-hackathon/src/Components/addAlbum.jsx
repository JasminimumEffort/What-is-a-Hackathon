import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Album from './albumTemplate';


const AddAlbum = () => {

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [artist, setArtist] = useState("");
    const [track_total, setTrackno] = useState("");
    const [allAlbums, setAllAlbums] = useState([]);

    const updateTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    };

    const getAlbums = async () => {

        try {
            const res = await axios.get('http://localhost:1296/GetAllAlbums');
            const inf = res.data
            setAllAlbums(inf);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {getAlbums()}, []);

    const deleteAlbum = async (id) => {
        try {
            const res = await axios.delete("http://localhost:1296/removeAlbum/" + id)
            console.log("Response:", res);
            setAllAlbums(res.data);
        } catch (err) {
    
        }
    }

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
                    <button type="submit">CREATE ALBUM</button>
                </div>
            </form>
            <div>
                <h1> Test
            </h1>
            </div>

            <div className="row row-cols-3 g-4">
                {allAlbums.map((album) => (
                    <Album
                        key={album._id}
                        title={album.title}
                        artist={album.artist}
                        label={album.label}
                        trackno={album.track_total}
                        handleClick={() => deleteAlbum(album._id)}
                    />

                ))}
            </div>
        </div>
    );
};

export default AddAlbum;