import { Button, Card, Carousel } from 'react-bootstrap';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import "../App.css"

function AlbumCarousel({ id, handleClick, title, artist,  track_total,  label, handleShow }) {


  return (
    <>
      <br />
      <Carousel className = "carousel">
        <Carousel.Body>
          <Carousel.Title>{title}</Carousel.Title>
          <Carousel.Text>{`Artist: ${artist}`}</Carousel.Text>
          <Carousel.Text>{`Number of Tracks: ${track_total}`}</Carousel.Text>
          <Carousel.Text>{`Label: ${label}`}</Carousel.Text>
          <button variant="primary" type="button" onClick={() => handleShow({title, artist, track_total, label, id})}>Edit Album</button>
          <button variant="primary" type="button" onClick={handleClick}>Delete Album</button>
        </Carousel.Body>
      </Carousel>
    </>
  )
}

{/* <input class = "btn btn primary" variant = "outline-info" type="button" value = "Edit Album" onClick={() => handleShow({title, artist, track_total, label, id})}/>
 <input class = "btn btn primary" variant = "outline-info" value = "Delete Album" variant="primary" type="button" onClick={handleClick}/> */}
export default AlbumCarousel;
