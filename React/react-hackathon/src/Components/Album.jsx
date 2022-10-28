import { Button, Card } from 'react-bootstrap';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import "../App.css"

function Album({ id, handleClick, title, artist,  track_total,  label, handleShow }) {


  return (
    <>
      <br />
      <Card className = "card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Artist: ${artist}`}</Card.Text>
          <Card.Text>{`Number of Tracks: ${track_total}`}</Card.Text>
          <Card.Text>{`Label: ${label}`}</Card.Text>
          <button variant="primary" type="button" onClick={() => handleShow({title, artist, track_total, label, id})}>Edit</button>
          <button variant="primary" type="button" onClick={handleClick}>Delete</button>
        </Card.Body>
      </Card>
    </>
  )
}

{/* <input class = "btn btn primary" variant = "outline-info" type="button" value = "Edit Album" onClick={() => handleShow({title, artist, track_total, label, id})}/>
 <input class = "btn btn primary" variant = "outline-info" value = "Delete Album" variant="primary" type="button" onClick={handleClick}/> */}
export default Album;

