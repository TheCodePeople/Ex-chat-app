const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    require: true,
    min: 4,
    mix: 16,
  },
});

const newUser = model("newUser", userSchema);
module.exports = newUser;
