const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();
const userController = require("Controllers/user.controller")

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:11634"
  }
})

// socket에 연결될 사람
io.on("connection", async (socket) => {
  console.log("client is connected", socket.id);

  // 받은 유저의 정보를 저장하고, 소켓 아이디 정보도 저장
  socket.on("login", async (userName, cb) => {
    console.log('userName: ' + userName);

    // 유저 정보 저장
    try {
      const user = await userController.saveUser(userName, socket.id);
      cb({ ok: true, data: user });
    } catch (error) {
      cb({ ok: false, error: error.message });
    }
  })

  // use가 나갔을 경우
  socket.on("disconnect", () => {
    console.log("user is disconnected");
  })
})

httpServer.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT)
})