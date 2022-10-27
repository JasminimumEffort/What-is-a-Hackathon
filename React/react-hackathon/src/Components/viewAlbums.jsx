import axios from 'axios';
import Album from './Album';

function ViewAlbums({allAlbums, setAllAlbums, handleShow}) {
    const deleteAlbum = async (id) => {
        try {
            const res = await axios.delete("http://localhost:1296/removeAlbum/" + id)
            console.log("Response:", res);
            setAllAlbums(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        
        <div className="row row-cols-3 g-4">
        {allAlbums.map((album) => (
            <Album
                key={album._id}
                title={album.title}
                artist={album.artist}
                label={album.label}
                track_total={album.track_total}
                id={album._id}
                handleClick={() => deleteAlbum(album._id)}
                handleShow={handleShow}
            />

        ))}
    </div>
    )
}
export default ViewAlbums;