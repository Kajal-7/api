const mongoose = require("mongoose");
// const subArray={
//     studentId: String,
//     link: String
// }
const assigSchema = new mongoose.Schema({
    title : {
        type : String, 
    }, 
    link: {
        type: String
    },
    issueDate: {
        type: Date,
    },
    deadline: {
        type: Date,
    },
    submissions:{
        type: Array, //of type subArray
        default: []
    },
    courseId:{
        type: String,
        required: true
    }
    
},{timestamps: true});

module.exports = mongoose.model("Assig", assigSchema);