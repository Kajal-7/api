const router = require("express").Router();
const req = require("express/lib/request");
const Course = require("../models/Course");
const RelationStuCourse = require("../models/RelationStuCourse")
const mongoose = require("mongoose");
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

router.post("/joinCourses", async(req, res) => {
    
    try {
        let cid = mongoose.Types.ObjectId(req.body.courseId);
        const course = await Course.findById(cid);
        console.log(course);
        if(!course){
            res.status(400).json("Course Code is Invalid");   
        }
        
        else{
            try{
                const RelationStuCourseTemp = new RelationStuCourse({
                    studentId : req.body.userId,
                    courseId : req.body.courseId
                })
                
                const newRelationStuCourse = await RelationStuCourseTemp.save(); 
                res.status(200).json(newRelationStuCourse);
                
            } catch(err){
                res.status(500).json(err);
            }

        }
        
    } catch (err) {
        res.status(500).json(err);
    }  
    
    
}
)

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

