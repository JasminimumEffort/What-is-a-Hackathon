import {Button, Card, Modal} from 'react-bootstrap';
import EditAlbum from './EditAlbum';
import {useState} from 'react';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Album({handleClick, title, setTitle, artist, setArtist, track_total, setTrackno, label, setLabel, editButton, id}){

  const [show, setShow] = useState(false);
  // const [handleTitle, setHandleTitle] = useState("");
  // const [handleArtist, setHandleArtist] = useState("");
  // const [handleLabel, setHandleLabel] = useState("");
  // const [handleTrackno, setHandleTrackno] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // setHandleTitle(title);
  // setHandleArtist(artist);
  // setHandleLabel(label);
  // setHandleTrackno(track_total);


  // this is the problem. {title, artist, label, track_total, id} Not passing updated values through
  const click = async () => {
    console.log(track_total, id)
    EditAlbum({title, artist, label, track_total, id});
    await handleClose();
  }

    return(
        <>
        <br/> 
        <Card bg = {'light'} border = "dark" >
        <Card.Body>          
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Artist: ${artist}`}</Card.Text>
          <Card.Text>{`Number of Tracks: ${track_total}`}</Card.Text>
          <Card.Text>{`Label: ${label}`}</Card.Text>
          <button variant = "primary" type="button" onClick = {handleShow}>Edit Album</button>
          <button variant = "primary" type="button" onClick={handleClick}>Delete Album</button>
        </Card.Body>
      </Card>

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
        <form>
              Edit This Album:
            <div className="form-group">
                    <label> Album name: </label>
                    <input type="text" className="form-control" id="AlbumName" onChange={(e) =>setTitle(e)} />
                    <br />
                    <label> Album Artist: </label>
                    <input type="text" className="form-control" id="AlbumArtist" onChange={(e) => setArtist(e)} />
                    <br />
                    <label> Total Tracks: </label>
                    <input type="text" className="form-control" id="AlbumTrackTotal" onChange={(e) => setTrackno(e)} />
                    <br />
                    <label> Record Label: </label>
                    <input type="text" className="form-control" id="AlbumLabel" onChange={(e) => setLabel(e)} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close without editing
          </Button>
          <Button variant="primary" onClick={click}>Save Changes</Button>
          {/*this is also the problem(title, artist, label, track_total, id)*/}
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Album;