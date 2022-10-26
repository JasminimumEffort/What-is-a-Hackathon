import React from 'react';
import'./App.css';
import ViewAlbums from './Components/viewAlbums';
import AddAlbum from './Components/addAlbum';
import EditAlbum from './Components/EditAlbum'
import InputFields from './Components/InputFields';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import GetAlbums from './Components/checkGet';

function App1(){
    return(
        <div>
            <AddAlbum/>
            <EditAlbum/>
            {/* <ViewAlbums/>
            <InputFields/>
            {/* <GetAlbums/> */}
        </div>
    )
};

export default App1