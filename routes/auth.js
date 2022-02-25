const router = require("express").Router();
const User = require("../models/User");

//REGISTER 

router.post("/register", async(req, res) => {
    try {
        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            dob : new Date(req.body.dob),
            role : req.body.role
        });

        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;