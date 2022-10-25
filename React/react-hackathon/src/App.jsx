import React from 'react';
import'./App.css';
import ViewAlbums from './Components/viewAlbums';
// import AddAlbum from './Components/addAlbums';
import InputFields from './Components/InputFields';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';

function App1(){
    return(
        <div>
            {/* <AddAlbum/> */}
            {/* <ViewAlbums/> */}
            <InputFields/>
        </div>
    )
};

export default App1