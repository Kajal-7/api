const router = require("express").Router();
const User = require("../models/User");

//REGISTER 

router.post("/register", async(req, res) => {

    const {email, password, name, dob, role} = req.body;

    User.findOne({email},async (err, user) => {
        if (err) {
            res.status(500).json({message : {msgBody : "Some error has occured", msgError : true}});
        }

        if (user) {
            res.status(400).json({message : {msgBody : "Email already in use", msgError : true}});
        }
        else {
            try {
                const newUser = new User({
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password,
                    dob : new Date(req.body.dob),
                    role : req.body.role
                });
        
                const user = await newUser.save();
                res.status(200).json({message : {msgBody : "Account Successfully Created", msgError : false}});
        
            }catch(err) {
                res.status(500).json({message : {msgBody : "Some error has occured", msgError : true}});
            }
        }
    })
   
});

module.exports = router;