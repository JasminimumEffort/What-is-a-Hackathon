let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let mongoDb = require('./db');
const app = express();

const albumRoutes = require('./routes/albums.route');

app.use(albumRoutes);
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status||500).send(err.message|| "Oh no");
});

const server = app.listen(1296, () => console.log(`Server successfully started on port ${server.address().port}`));