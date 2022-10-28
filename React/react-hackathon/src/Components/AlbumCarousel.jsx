import { Button, Card, Carousel } from 'react-bootstrap';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import "../App.css"

function AlbumCarousel({ title, artist,  track_total,  label}) {


  return (
    <>
      <br />
      <Carousel className = "carousel">
        <Carousel.Item>
          <Carousel.Caption>
          <h2>{title}</h2>
          <h3>{`Artist: ${artist}`}</h3>
          <p>{`Number of Tracks: ${track_total}`}</p>
          <p>{`Label: ${label}`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

{/* <input class = "btn btn primary" variant = "outline-info" type="button" value = "Edit Album" onClick={() => handleShow({title, artist, track_total, label, id})}/>
 <input class = "btn btn primary" variant = "outline-info" value = "Delete Album" variant="primary" type="button" onClick={handleClick}/> */}
export default AlbumCarousel;
