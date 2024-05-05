const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserById,
  postNewUser,
  deleteUser,
  userUpdate,
} = require("../controllers/user.controllers");

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", postNewUser);
router.delete("/:id", deleteUser);
router.put("/:id", userUpdate);

module.exports = router;
