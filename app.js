const dotevn = require("dotenv");
dotevn.config();
const DataBases = require("./DataBases");
const ChatRouter = require("./routes/chat.routrs");
const UserRouter = require("./routes/user.routers");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
// const data = require("./data");
// const uuid4 = require("uuid4");
// const uuid = uuid4();
// let getData = data;

app.use(cors());
app.use(express.json());
app.use("/allchat", ChatRouter);
app.use("/alluser", UserRouter);
DataBases();
const errorMiddleware = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
};
app.use(errorMiddleware);
app.put("/alldata/:id");

app.listen(port, () => {
  console.log(`hello backend${port}`);
});
