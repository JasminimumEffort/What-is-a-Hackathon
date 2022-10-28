import CreateAlbum from "./CreateAlbum";
import CreateModal from "./CreateModal";
import { Carousel, Toast } from 'react-bootstrap';
import AlbumCarousel from "./AlbumCarousel";
import {useState} from "react";

function Home({handleShowCreate}) {
    const Carou = () => {
        return(
            <Carousel className = "Carousel" variant = 'dark'>
            <Carousel.item>
                <img className = "D-BLOCK W-100" src = "https://pbs.twimg.com/media/FbbloNbUsAAeO3-.jpg"/>
            </Carousel.item>
            <Carousel.item>
                <img className = "D-BLOCK W-100" src = "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png"/>
            </Carousel.item>
            </Carousel>
        )
    }

    return (
        <div>
            <h1 className = "dumbTitle">
                WELCOME TO MY iPOD SHUFFLE
            </h1>
            <h3 className= "sillyLittleBlurb">
                Please feel free to donate CDs to my album collection.
            </h3>
            
            {/* <Toast>
            <Toast.Header>
                Hello!
            </Toast.Header>
            <Toast.Body>Welcome to my silly little album database</Toast.Body>
            </Toast> */}
            {/* <Carou/> */}

            <button type="submit"><input className = "btn btn primary" type = "button" value ="Create Album" onClick={() => handleShowCreate({})}/></button>
        </div>
    )
}

export default Home;