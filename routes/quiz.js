const router = require("express").Router();
const Quiz = require("../models/Quiz");


//get quiz with specific course id
router.get("/courseid/:cid",async(req,res)=>{
    try {
        var query = { courseId: (req.params.cid) };
        const quiz= await Quiz.find(query);
        res.status(200).json(quiz);
    } catch {
        res.status(500).json(err);
    }
});


module.exports = router;