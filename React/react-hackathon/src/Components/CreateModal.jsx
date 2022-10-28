import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const CreateModal = ({ getAlbums, handleCloseCreate, createAlbum}) => {

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [artist, setArtist] = useState("");
    const [track_total, setTrackno] = useState("");

    const handleClickCreate = async () => {
        await AddDeets({title, artist, track_total, label});
        getAlbums();
        handleCloseCreate();
      }

    const AddDeets = async (e) => {
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
            console.log(err)
        }
    };

    return (
        <div>
             <Modal className = "Modal"
      show={!!createAlbum}        
      onHide={handleCloseCreate}       
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
      <Modal.Title>Create Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={AddDeets}>
            <div className="form-group">
                    <label> Album name (required): </label>
                    <input required type="text" value = {title} className="form-control" id="AlbumName" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label> Album Artist: </label>
                    <input type="text" value = {artist}  className="form-control" id="AlbumArtist" onChange={(e) => setArtist(e.target.value)} />
                    <br />
                    <label> Total Tracks: </label>
                    <input type="text" value = {track_total}  className="form-control" id="AlbumTrackTotal" onChange={(e) => setTrackno(e.target.value)} />
                    <br />
                    <label> Record Label: </label>
                    <input type="text" value = {label}  className="form-control" id="AlbumLabel" onChange={(e) => setLabel(e.target.value)} />
                </div>
            </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type= 'submit' id = "CloseButton" onClick={handleCloseCreate}>
          Close without editing
        </Button>
        <Button variant="primary" id = "SaveCreateButton" onClick={handleClickCreate}>Create Album</Button>
        {/*this is also the problem(title, artist, label, track_total, id)*/}
      </Modal.Footer>
        </Modal>
        </div>
    );
};


export default CreateModal;