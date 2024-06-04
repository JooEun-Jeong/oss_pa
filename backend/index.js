const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
})

// socket에 연결될 사람
io.on("connection", async (socket) => {
  console.log("client is connected", socket.id);
})

httpServer.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT)
})