const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    beginTime:{
        type: Date,
    },
    endTime:{
        type: Date,
    },
    link:{
        type: String,
        required: true
    },
    date:{
        type: Date,
    }
    
},{timestamps: true});
module.exports = mongoose.model("Class", classSchema);