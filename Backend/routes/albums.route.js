const router = require("express").Router();
const{ albumModel } = require("../album");

router.get("/GetAllAlbums", (req, res, next) =>{
    albumModel.find({}).then(results => res.send(results)).catch(err);
})

router.post("/createAlbum", async (req, res, next) => {
    // if(!req.body.title) return next({status: 400, message: "No Album Name"})
    try{
        const result = await albumModel.create(req.body);
        res.status(201).send(result);
    } catch(err) {
        return next(err);
    }
});

router.patch("/updateAlbum/:id", async (req, res, next) => {
    // if(!req.body.title) return next({status: 400, message: "No Album Name"})
    try{
        await albumModel.findByIdAndUpdate(req.params.id, req.query);
        const newAlbum = await albumModel.findById(req.params.id);
        res.send(newAlbum);
    } catch(err) {
        return next(err);
    }
});

router.delete("/removeAlbum/:id", async (req, res, next)=> {
    const {id} = req.params;
    if(!albumModel.findById(id)) return next({ status:404, message: ' This album does not currently exist.'});
    try{
        let albumName = await albumModel.findById(id, "name");
        await albumModel.findByIdAndDelete(id);
        const result = await albumModel.find({});
        res.send(result);
    } catch(err){
        return next(err); 
    }
})

module.exports = router;