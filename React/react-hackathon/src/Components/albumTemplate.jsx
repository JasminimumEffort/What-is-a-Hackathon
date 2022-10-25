import {Button, Card} from 'react-bootstrap';
// import{ BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Album({title, artist, trackno, label, editButton}){
    return(
        <>
        <br/> 
        <Card bg = {'dark'} border = "light" >
        <Card.Body>          
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Artist: ${artist}`}</Card.Text>
          <Card.Text>{`Number of Tracks: ${trackno}`}</Card.Text>
          <Card.Text>{`Label: ${label}`}</Card.Text>
          <button variant = "primary" type="button">Edit Album</button>
        </Card.Body>
      </Card>
        </>
    )
}

export default Album;