const router = require("express").Router();
const Course = require("../models/Course");

//Get a course

router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;