const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();
const userController = require("./Controllers/user.controller")
const chatController = require("./Controllers/chat.controller")

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:1388"
  }
})
require("./utils/io")(io);

httpServer.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT)
})