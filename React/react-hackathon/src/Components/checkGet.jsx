import {useState, axios, React} from 'react';
import Album from './albumTemplate'

const GetAlbums = () => {
const [allAlbums, setAllAlbums] = useState([]);
 const GetAl = async () => {
    try{
        const res = await axios.get("http://localhost:1296/GetAllAlbums");
        console.log("Response:", res);
        setAllAlbums(res);
    }catch(err){

    }};

    GetAl();

return(
    <div className="row row-cols-3 g-4">
    {allAlbums.map((album) => (
        <Album
            title={album.title}
            artist={album.artist}
            label={album.label}
            trackno={album.track_total}
        />

    ))}
</div>
)};

export default GetAlbums;