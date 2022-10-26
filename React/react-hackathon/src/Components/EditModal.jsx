import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditAlbum from './EditAlbum';

const EditModal = ({title, artist, track_total, label}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Test modal
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={EditAlbum({title, artist, label, track_total}), handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;