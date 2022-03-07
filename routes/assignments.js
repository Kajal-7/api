const router = require("express").Router();
const Assignment = require("../models/Assignment");

//get an assignment (get method because we just need to view on calendar)
router.get("/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        res.status(200).json(assignment);
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;