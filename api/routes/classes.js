const router = require("express").Router();
const Classes = require("../models/Classes");

//get all classes

router.get("/",async(req,res)=>{
    try{
        const classes= await Classes.find();
        res.status(200).json(classes);
    }catch{
        res.status(500).json(err);
    }
});

//get class with specific course id

router.get("/courseid/:cid",async(req,res)=>{
    try {
        var query = { courseId: (req.params.cid) };
        const classes =  await Classes.find(query);
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get class with specific id

router.get("/:id", async (req, res) => {
    try {
        const classes = await Classes.findById(req.params.id);
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const newClass = new Classes(req.body);
        const response = await newClass.save();
        res.status(200).json(response);
    } catch(err) {
        res.send(500).json(err);
    }
    
})

module.exports = router;