const mongoose = require("mongoose");

const messageSchema=new mongoose.Schema({
    chatId: {
        type: String,
        requied: true
    },
    text:{
        type: String,
        default: ""
    },
    dateTime:{
        type: Date,
    },
    senderId:{
        type: String
    }

},{timestamps: true});

module.exports = mongoose.model("Message", messageSchema);