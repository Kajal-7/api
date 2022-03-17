const router = require("express").Router();
const Message = require("../models/Message");

router.get("/:convoId", async(req, res) => {
    try {
        const allMessages = await Message.find({chatId : req.params.convoId});

        res.status(200).json(allMessages);
    }catch(err) {
        res.status(500).json(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const newMessage = new Message(req.body);
        const message = await newMessage.save();

        res.status(200).json(message);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;