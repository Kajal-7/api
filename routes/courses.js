const router = require("express").Router();
const Course = require("../models/Course");

router.post("/", async (req, res) => {
    const {name, desc, image, teacherId} = req.body;
    try {
        const course = new Course({
            name : name,
            desc : desc,
            image : image,
            teacherId : teacherId
        });

        const newCourse = await course.save();
        res.status(200).json(newCourse);

    }catch(err) {
        res.status(500).json({message : {msgBody : "Some error has occured", msgError : true}});
    }
});

//Get a course

router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get courseName 

router.get("/courseName/:cid", async(req,res)=>{
    try {
        const course = await Course.findById(req.params.cid,{name: 1});
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;

