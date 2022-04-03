const router = require("express").Router();
const Assignment = require("../models/Assig");


//get all assignments
router.get("/",async(req,res)=>{
    try{
        const assignments= await Assignment.find();
        res.status(200).json(assignments);
    }catch (err){
        res.status(500).json(err);
    }
});

//get assignmnet with specific course id
router.get("/courseid/:cid",async(req,res)=>{
    try {
        var query = { courseId: (req.params.cid) };
        const assignment = await Assignment.find(query);
        res.status(200).json(assignment);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get an assignment using its _id
router.get("/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        res.status(200).json(assignment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/submission/:id", async (req, res) => {    
    try {
        
        const updated =   await Assignment.findByIdAndUpdate(
            req.params.id, 
            { $push: { submissions: req.body } },
            {new : true},
        );
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        // console.log(req.body);
        const newAssign = new Assignment(req.body);
        const response = await newAssign.save();

        res.status(200).json(response);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;