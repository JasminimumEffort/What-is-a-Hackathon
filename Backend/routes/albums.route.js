const router = require("express").Router();
const{ albumModel } = require("../album");

router.get("/GetAllAlbums", async (req, res, next) =>{
    try{
        let all = await albumModel.find({});
        return res.send(all)
    }catch(err){
        return next(err);
    }    
});

// albumModel.find({}).then(results => res.status(201).send(results)).catch(err => next(err));



router.post("/createAlbum", async (req, res, next) => {
    // if(!req.body.title) return next({status: 400, message: "No Album Name"})
    try{
        console.log(req.body)
        const result = await albumModel.create(req.body);
        return res.status(201).send(result);
    } catch(err) {
        return next(err);
    }
});

router.patch("/updateAlbum/:id", async (req, res, next) => {
    // if(!req.body.title) return next({status: 400, message: "No Album Name"})
    try{
        const newAlbum = await albumModel.findByIdAndUpdate(req.params.id, req.body , {
            new: true
        });
        return res.send(newAlbum);
    } catch(err) {
        return next(err);
    }
});

router.delete("/removeAlbum/:id", async (req, res, next)=> {
    const id = req.params.id;
    if(!albumModel.findById(id)) return next({ status:404, message: ' This album does not currently exist.'});
    try{
        await albumModel.findByIdAndDelete(id);
        const result = await albumModel.find({});
        return res.send(result);
    } catch(err){
        return next(err); 
    }
})

module.exports = router;