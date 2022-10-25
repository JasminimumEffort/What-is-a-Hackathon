import {useState} from 'react'
import axios from 'axios';
import Album from './albumTemplate'

const GetAlbums = async () => {

    const [allAlbums, setAllAlbums] = useState([]);
    const getAl = async () => {
    try{
        const res = await axios.get("http://localhost:1296/GetAllAlbums");
        setAllAlbums(res.data);
    } catch(err){
        console.log(err);
    }
    };
    getAl()
        return(
            <div>
                <p>
                    test
                </p>
                {/* <div className="row row-cols-3 g-4">
                {allAlbums.map((album) => (
                    <Album
                        title={album.title}
                        artist={album.artist}
                        label={album.label}
                        trackno={album.trackno}
                    />

                ))}
        </div> */}
            </div>
        )
    };

export default GetAlbums;