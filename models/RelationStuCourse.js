const mongoose = require("mongoose");

const relationStuCourseSchema = new mongoose.Schema({
    studentId : {
        type : String,
        required : true,
    },
    courseId : {
        type : String,
        required : true,
    },
    attended : {
        type : Number,
        default : 0
    },
    
},{timestamps: true});

relationStuCourseSchema.index({ studentId: 1, courseId: 1}, { unique: true });

module.exports = mongoose.model("RelStuCourse", relationStuCourseSchema);