const mongoose = require("mongoose");
// const announcement={
//     descp: {
//         type: String 
//     },
//     dateTime:{
//         type: Date 
//     },
// }

const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }, 
    teacherId : {//stored by us as user will create the course and its id can be stored here
        type : ObjectId,
        required : true,
        unique: true
    },
    assignment : {
        type : Array,  //contain ids of assignments
        default : []
    },
    quiz : {
        type : Array, //contain ids 
        default : []
    },
    announcemnet:{
        type : Array,  //objects array
        default : []
    },
    courseMaterial:{
        type : Array,  //objects array
        default : []
    },
    classes:{
        type : Array,  //contain ids
        default : []
    },
    totalClasses : {
        type : Number,
        default : 0
    }
    
    
},{timestamps: true});

module.exports = mongoose.model("Course", courseSchema);