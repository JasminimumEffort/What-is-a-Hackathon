import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const EditAlbum = ({title, artist, track_total, label, id}) => {
    const editDeets = async () => {
        try {
            const res = await axios.patch("http://localhost:1296/updateAlbum/" + id, {
                title,
                artist,
                track_total,
                label
            })
            console.log("Response:", res);
        } catch (err) {

        }
    }

    return(
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit Album</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary">Close and don't save</Button>
          <Button variant="primary" onClick = {editDeets}>Save Changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
}

export default EditAlbum;