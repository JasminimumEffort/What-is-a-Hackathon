import { useState, useEffect } from 'react';
import ViewAlbums from './Components/viewAlbums';
import CreateAlbum from './Components/CreateAlbum';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import EditModal from './Components/EditModal';
import axios from 'axios';
import'./App.css';
import CreateModal from "./Components/CreateModal";
import Home from "./Components/Home"

function App() {

    const [allAlbums, setAllAlbums] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState("");
    const [createAlbum, setCreateAlbum] = useState("");

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
            <div>
            <Home handleShowCreate={setCreateAlbum} allAlbums={allAlbums}/>
            {createAlbum && <CreateModal createAlbum={createAlbum} getAlbums={getAlbums} handleCloseCreate={() => setCreateAlbum(null)}/>}
            </div>
            {/* <div>
            <CreateAlbum getAlbums={getAlbums}/>
            </div> */}
            <br/>
            <br/>
            <div>
            <ViewAlbums allAlbums={allAlbums} setAllAlbums={setAllAlbums} handleShow={setCurrentAlbum}/>
            {currentAlbum && <EditModal currentAlbum={currentAlbum} getAlbums={getAlbums} handleClose={() => setCurrentAlbum(null)}/>}
            </div>
        </div>
    )
};

export default App;