let express = require('express');
let bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());

const albumRoutes = require('./routes/albums.route.js');

app.use(albumRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status||500).send(err.message|| "Oh no");
});

const server = app.listen(1296, () => console.log(`Server successfully started on port ${server.address().port}`));