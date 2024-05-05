const newUser = require("../models/UserSchema");

exports.getAllUser = async (req, res, next) => {
  try {
    const allUser = await newUser.find();
    res.status(200).json(allUser);
  } catch (error) {
    next(error);
  }
};
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await newUser.findById({ id });
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.postNewUser = async (req, res, next) => {
  try {
    const addUser = req.body;
    await newUser.create(addUser);
    res.json({ addUser });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await newUser.findByIdAndDelete(id);
    res.json({ message: "delete user done " });
  } catch (error) {
    next(error);
  }
};

exports.userUpdate = async (req, res, next) => {
  try {
    const userId = { _id: req.params.id };
    const updateUser = req.body;
    await newUser.findByIdAndUpdate(userId, updateUser);
    res.status(200).json(updateUser, { message: "update user is done " });
  } catch (error) {
    next(error);
  }
};
