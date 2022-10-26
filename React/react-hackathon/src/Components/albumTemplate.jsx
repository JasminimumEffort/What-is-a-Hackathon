import {Button, Card, Modal} from 'react-bootstrap';
import EditAlbum from './EditAlbum';
import {useState} from 'react';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Album({handleClick, title, artist, track_total, label, editButton, id}){

  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // this is the problem. 
  // const click = async ({title, artist, label, track_total, id}) => {
  //   EditAlbum({title, artist, label, track_total, id});
  //   await handleClose();
  // }

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
                    <input type="text" className="form-control" id="AlbumName" onChange={(e) => title = (e.target.value)} />
                    <br />
                    <label> Album Artist: </label>
                    <input type="text" className="form-control" id="AlbumArtist" onChange={(e) => artist = (e.target.value)} />
                    <br />
                    <label> Total Tracks: </label>
                    <input type="text" className="form-control" id="AlbumTrackTotal" onChange={(e) => track_total =(e.target.value)} />
                    <br />
                    <label> Record Label: </label>
                    <input type="text" className="form-control" id="AlbumLabel" onChange={(e) => label = (e.target.value)} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close without editing
          </Button>
          {/* <Button variant="primary" onClick={click(title, artist, label, track_total, id)}>Save Changes</Button> */}
          {/*this is also the problem*/}
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Album;