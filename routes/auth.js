const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

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
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt);
            try {
                const newUser = new User({
                    name : name,
                    email : email,
                    password : hashedPass,
                    dob : new Date(dob),
                    role : role
                });
        
                const user = await newUser.save();
                res.status(200).json({message : {msgBody : "Account Successfully Created", msgError : false}});
        
            }catch(err) {
                res.status(500).json({message : {msgBody : "Some error has occured", msgError : true}});
            }
        }
    })
   
});

//LOGIN 

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email : req.body.email });

      if (!user) {
        return res.status(400).json("No such user exits");
      }
  
      const validated = await bcrypt.compare(req.body.password, user.password);

        if (!validated) {
        return res.status(400).json("Wrong credentials!");
      }
  
      const { password, ...others } = user._doc;
      return res.status(200).json(others);
    } catch (err) {
      return res.status(500).json(err);
    }
  });



module.exports = router;