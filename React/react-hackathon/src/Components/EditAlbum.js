import axios from 'axios'


const EditAlbum = async ({title, artist, track_total, label, id}) => {
        try {
            const res = await axios.patch(`http://localhost:1296/updateAlbum/`+ id, {
                title,
                artist,
                track_total,
                label
            });
            console.log("Response:", res);
        } catch (err) {
            console.error(err);
        }
}

export default EditAlbum;