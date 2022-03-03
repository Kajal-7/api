const mongoose = require("mongoose");

// const message={
//     desc : {
//         type : String,
//     },
//     dateTime:{
//         type: Date,
//     },
//     senderId:{
//         type: String
//     }
    
// }

const chatSchema = new mongoose.Schema({
    id : {
        type : String, //assigned by us when chat initiated as teacherid_studentid
        unique: true
    }, 
    listOfMsg:{
        type: Array, //Array of objects of type message 
        default: []
    }
    
},{timestamps: true});

module.exports = mongoose.model("Chat", chatSchema);