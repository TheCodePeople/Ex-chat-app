const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

let chatList = require("./data.js");

let newID = require("uuid4");

const port = 1000;

//* To get all chats
app.get("/chats", (req, res) => {
  res.json({ chatList });
});

//* To get a chat based on a username.
app.get("/chats/:username", (req, res) => {
  try {
    const username = req.params.username.trim();

    const chatText = chatList.find(
      (list) => list.username === username.toLowerCase()
    );

    if (chatText) {
      res.json(chatText);
    } else {
      res.status(404).json({ error: "Chat not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "SERVER ERROR" });
  }
});

//* For the user to create a chat
app.post("/chats", (req, res) => {
  const { username, text } = req.body;

  if (!username) {
    res.status(401).json({ error: "username is required" });
    return;
  }
  if (!text) {
    res.status(401).json({ error: "text is required" });
    return;
  }

  const newChat = { ...req.body, id: newID() };
  chatList.push(newChat);
  res.json({ chatList });

  try {
  } catch (error) {
    res.status(500).json({ error: "SERVER ERROR" });
  }
});

//* For the user to update the text field and return the updated chat
app.put("/chats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const chatMessage = chatList.find((chat) => chat.id === id);

    if (!chatMessage) {
      return res.status(404).json({ error: "Chat not found" });
    }

    chatMessage.text = text;

    res.json(chatMessage);
  } catch (error) {
    res.status(500).json({ error: "SERVER ERROR" });
  }
});

//* For the user to Delete a Chat based on ID
app.delete("/chats/:id", (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.json({ error: "Invalid ID" });
      return;
    }

    chatList = chatList.filter((list) => {
      return list.id !== id;
    });

    res.json(chatList);
  } catch (error) {
    res.status(500).json({ error: "SERVER ERROR" });
  }
});
app.listen(port, () => {
  console.log(`This server runs in port ${port}`);
});
