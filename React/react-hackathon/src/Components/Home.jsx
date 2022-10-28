import CreateAlbum from "./CreateAlbum";
import CreateModal from "./CreateModal";
import { Carousel, Toast } from 'react-bootstrap';
import AlbumCarousel from "./AlbumCarousel";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({handleShowCreate, allAlbums}) {
    const Carou = () => {
        return(
            //thhis is ugly but it works pending a resize https://pbs.twimg.com/media/FbbloNbUsAAeO3-.jpg
            <Carousel className = "Carousel" variant = 'dark'>
            <Carousel.Item>
                <div class= "d-flex justify-content-center">
                <img className = "imgCarousel" src = "https://pbs.twimg.com/media/FbbloNbUsAAeO3-.jpg"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class= "d-flex justify-content-center">
                <img className = "imgCarousel" src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png/220px-Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div class= "d-flex justify-content-center">
                <img className = "imgCarousel" src = "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png"/>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div class= "d-flex justify-content-center">
                <img className = "imgCarousel" src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Midnights_-_Taylor_Swift.png/220px-Midnights_-_Taylor_Swift.png"/>
            </div>
            </Carousel.Item>
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

            {/* <div className="row row-cols-3 g-4">
            {allAlbums.map((album) => (
            <AlbumCarousel
                key={album._id}
                title={album.title}
                artist={album.artist}
                label={album.label}
                track_total={album.track_total}
            />

        ))}
        </div> */}
            
            {/* <Toast>
            <Toast.Header>
                Hello!
            </Toast.Header>
            <Toast.Body>Welcome to my silly little album database</Toast.Body>
            </Toast> */}
            <Carou/>
            <button type="submit"><input className = "btn btn primary" type = "button" value ="Create Album" onClick={() => handleShowCreate({})}/></button>
        </div>
    )
}

export default Home;