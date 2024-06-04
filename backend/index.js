const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:11634"
  }
})

// socket에 연결될 사람
io.on("connection", async (socket) => {
  console.log("client is connected", socket.id);

  // use가 나갔을 경우
  socket.on("disconnect", () => {
    console.log("user is disconnected");
  })
})

httpServer.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT)
})