

const InputFields = () => {
    return(
    <div>
        <form>
            Add an Album:
            <div className = "form-group">
                <label> Album name: </label>
                <input type="text" className="form-control" id = "AlbumName" />
                <br/>
                <label> Album Artist: </label>
                <input type="text" className="form-control" id = "AlbumArtist" />
                <br/>
                <label> Total Tracks: </label>
                <input type="text" className="form-control" id = "AlbumTrackTotal" />
                <br/>
                <label> Record Label: </label>
                <input type="text" className="form-control" id = "AlbumLabel" />
                <br/>
                <br/>
                <button type = "submit">CREATE ALBUM</button>
            </div>

        </form>
        </div>
    );
};

export default InputFields; 