const sendChat = require("../models/ChatSchema");

exports.getAllChat = async (req, res, next) => {
  try {
    const allChats = await sendChat.find();
    res.status(200).json(allChats);
  } catch (error) {
    next(error);
  }
};

exports.getChatById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await sendChat.findById({ id });
    res.status(200).json(sendChat);
  } catch (error) {
    next(error);
  }
};

exports.postSend = async (req, res, next) => {
  try {
    const newChat = req.body;
    await sendChat.create(newChat);

    res.json({ newChat });
  } catch (error) {
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await sendChat.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateChat = async (req, res, next) => {
  try {
    const chatId = { _id: req.params.id };
    const updatedChat = req.body;
    await sendChat.findByIdAndUpdate(chatId, updatedChat);
    res.status(200).json(updatedChat);
  } catch (error) {
    next(error);
  }
};
