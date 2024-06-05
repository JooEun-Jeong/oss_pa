
module.exports = function (io) {

  const userController = require("../Controllers/user.controller")
  const chatController = require("../Controllers/chat.controller")

  // socket에 연결될 사람
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    // 받은 유저의 정보를 저장하고, 소켓 아이디 정보도 저장
    socket.on("login", async (userName, cb) => {
      console.log('userName: ' + userName);
      // 유저 정보 저장
      try {
        const user = await userController.saveUser(userName, socket.id);
        const welcomMessage = {
          chat: `${user.name} is joined to this room`,
          user: { id: null, name: "system" }
        }
        io.emit("message", welcomMessage);
        cb({ ok: true, data: user });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    })

    socket.on("sendMessage", async (message, cb) => {
      try {
        // 유저 이름 찾기: socket id로
        console.log("userId: " + socket.id);
        const user = await userController.getUserBySid(socket.id);
        console.log(user)

        // 메세지 저장
        const newMessage = await chatController.saveChat(message, user);
        io.emit("message", newMessage);
        cb({ ok: true });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    })


    // use가 나갔을 경우
    socket.on("disconnect", () => {
      console.log("user is disconnected");
    })
  })
};