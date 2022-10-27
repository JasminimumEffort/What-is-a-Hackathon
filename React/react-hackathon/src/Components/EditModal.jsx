import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditAlbum from './EditAlbum';

const EditModal = ({ currentAlbum, handleClose, getAlbums}) => {

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [track_total, setTrackNo] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    setTitle(currentAlbum.title);
    setArtist(currentAlbum.artist);
    setTrackNo(currentAlbum.track_total);
    setLabel(currentAlbum.label);
  }, [currentAlbum]);

  const handleClick = async () => {
    await EditAlbum({title, artist, track_total, label, id: currentAlbum.id});
    getAlbums();
    handleClose();
  }

  return (
    <Modal
      show={!!currentAlbum}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          Edit This Album:
<div className="form-group">
            <label> Album name: </label>
            <input type="text" className="form-control" id="AlbumName" value={title} onChange={e => setTitle(e.target.value)} />
            <br />
            <label> Album Artist: </label>
            <input type="text" className="form-control" id="AlbumArtist" value={artist} onChange={e => setArtist(e.target.value)} />
            <br />
            <label> Total Tracks: </label>
            <input type="text" className="form-control" id="AlbumTrackTotal" value={track_total} onChange={e => setTrackNo(e.target.value)} />
            <br />
            <label> Record Label: </label>
            <input type="text" className="form-control" id="AlbumLabel" value={label} onChange={e => setLabel(e.target.value)} />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close without editing
</Button>
        <Button variant="primary" onClick={handleClick}>Save Changes</Button>
        {/*this is also the problem(title, artist, label, track_total, id)*/}
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;