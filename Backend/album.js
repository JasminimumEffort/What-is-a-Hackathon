const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/albums_db", {
    useNewUrlParser: true
}).then(()=> console.log("Connected to MongoDB")).catch(err => console.error(err));

let albumSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String
    },
    track_total:{
        type: Number
    },
    label:{
        type: String
    }
});

// const tracklistSchema = new mongoose.Schema({
//     track_name: {
//         type: String,
//         require: True
//     },
//     track_num: {
//         type: Number,
//         require: True
//     },
//     Bonus_track: Boolean
// });


const albumModel = mongoose.model("album", albumSchema);

module.exports = {
    albumModel
}