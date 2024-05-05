const express = require("express");
const router = express.Router();

const {
  getAllChat,
  getChatById,
  postSend,
  deleteById,
  updateChat,
} = require("../controllers/chat.controllers");

router.get("/", getAllChat);
router.get("/:id", getChatById);
router.post("/", postSend);
router.delete("/:id", deleteById);
router.put("/:id", updateChat);
module.exports = router;
