import { Button, Card, Modal } from 'react-bootstrap';
import EditAlbum from './EditAlbum';
import { useState } from 'react';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Album({ id, handleClick, title,  artist,  track_total,  label, handleShow }) {


  return (
    <>
      <br />
      <Card bg={'light'} border="dark" >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Artist: ${artist}`}</Card.Text>
          <Card.Text>{`Number of Tracks: ${track_total}`}</Card.Text>
          <Card.Text>{`Label: ${label}`}</Card.Text>
          <button variant="primary" type="button" onClick={() => handleShow({title, artist, track_total, label, id})}>Edit Album</button>
          <button variant="primary" type="button" onClick={handleClick}>Delete Album</button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Album;

// <input class = "btn btn primary" variant = "outline-info" type="button" value = "Edit Album" onClick={() => handleShow({title, artist, track_total, label, id})}/>
{/* <input class = "btn btn primary" variant = "outline-info" value = "Delete Album" variant="primary" type="button" onClick={handleClick}/> */}