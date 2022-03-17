const router = require("express").Router();
const req = require("express/lib/request");
const Course = require("../models/Course");
const RelationStuCourse = require("../models/RelationStuCourse")

router.post("/", async(req, res) => {
    try{
         const newCourse = new Course({
             name : req.body.name,
             desc : req.body.desc,
             image : req.body.image,
             teacherId : req.body.teacherId
         })

         
        const course = await newCourse.save(); 
        
        res.status(200).json(course);
    } catch(err){
        res.status(500).json(err);
    }
}
)

router.post("/joinCourse", async(req, res) => {
    try {
        const course = await Course.findOneById(req.body.id);

        if(!course){
            res.status(400).json("Course Code is Invalid");   
        }

        const temp = RelationStuCourse
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }  
    
    
}
)
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

