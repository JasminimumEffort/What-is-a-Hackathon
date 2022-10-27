import { useState, useEffect } from 'react';
import'./App.css';
import ViewAlbums from './Components/ViewAlbums';
import CreateAlbum from './Components/CreateAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import EditModal from './Components/EditModal';
import axios from 'axios';

function App() {
    const [allAlbums, setAllAlbums] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState("");

    const getAlbums = async () => {

        try {
            const res = await axios.get('http://localhost:1296/GetAllAlbums');
            const inf = res.data
            setAllAlbums(inf);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { getAlbums() }, []);

    return(
        <div>
            <CreateAlbum getAlbums={getAlbums}/>
            <br/>
            <br/>
            <ViewAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums} handleShow={setCurrentAlbum}/>
            {currentAlbum && <EditModal currentAlbum={currentAlbum} getAlbums={getAlbums} handleClose={() => setCurrentAlbum(null)}/>}
        </div>
    )
};

export default App;