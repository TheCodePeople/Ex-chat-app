const mongoose = require("mongoose");
const DataBases = async () => {
  try {
    const ChatAppLink = await mongoose.connect(`${process.env.ChatAppLink}`);
    console.log(`db is connected on port 8000 ${ChatAppLink.connection.host}`);
  } catch (error) {
    console.log("something", error);
  }
};
module.exports = DataBases;
