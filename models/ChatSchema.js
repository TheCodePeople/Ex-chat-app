const { model, Schema } = require("mongoose");

const chatSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});
const sendChat = model("sendChat", chatSchema);
module.exports = sendChat;
