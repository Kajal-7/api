const router = require("express").Router();
const Course = require("../models/Course");
const Quiz = require("../models/Quiz");


//get quiz with specific course id
router.get("/courseid/:cid",async(req,res)=>{
    try {
        var query = { courseId: (req.params.cid) };
        const quiz= await Quiz.find(query);
        res.status(200).json(quiz);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const newQuiz = new Quiz(req.body);
        const response = await newQuiz.save();
        res.status(200).json(response);
    } catch(err) {
        res.status(500).json(err);
    }
})


//get quiz with specific id
router.get("/:id" , async(req,res) =>{
    try{
        const quiz = await Quiz.findById(req.params.id);
        res.status(200).json(quiz);
    }catch(err){
        res.status(500).json(err);
    }
})

router.post("/" , async(req , res) => {
    const {userId , ans , marks} =req.body;
    try{
        const submission = new Quiz.submissions({
            studentId : userId,
            markedAns: ans,
            totalMarks : marks,
        });

        const newSubmission = await submission.save();
        res.status(200).json(newSubmission);
    }catch(err){
        res.status(500).json({message : {msgBody : "Error Occured!" , msgError : true}});
    }
})


module.exports = router;