const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can run it in the test and send requests to it

const { albumModel } = require("../album");

describe("albumtests", () => {
    
    let sweetFreedom;
    
    beforeEach(async () => {
        try{
            await albumModel.deleteMany({});
            sweetFreedom = await albumModel.create({
            "title": "Fearless - Taylor's Version",
            "artist": "Taylor Swift",
            "label": "Universal",
            "track_total": "13"
            });
            sweetFreedom = JSON.parse(JSON.stringify(sweetFreedom));
            console.log();
        } catch(err) {
            console.error(err);
        }
    });
    
    it("should create an album", (done) => {
        const newAlbum ={
            "title": "Red - Taylor's Version",
            "artist": "Taylor Swift",
            "label": "Universal",
            "track_total": "15"
            }
        chai.request(server).post("/createAlbum").send(newAlbum).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newAlbum);
            done(); //tells mocha the test has finished
        });
    });
    it("should replace an album using .json", (done) => {
        const newAlbum1 = {
            "title": "Speak Now - Taylor's Version",
            "artist": "Taylor Swift",
            "label": "Universal",
            "track_total": "18"
            }
        chai.request(server).patch("/updateAlbum/" + sweetFreedom._id).send(newAlbum1).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(newAlbum1);
            done(); //tells mocha the test has finished
        });
    });
    it("should get all of the albums", (done) => {
        chai.request(server).get("/GetAllAlbums").send().end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(sweetFreedom);
            done(); //tells mocha the test has finished
        });

    });
    it("should delete an album from the database", (done) => {
      chai.request(server).delete("/removeAlbum/" + sweetFreedom._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.not.include(goodDog)
            done(); //tells mocha the test has finished
        });
    });
})