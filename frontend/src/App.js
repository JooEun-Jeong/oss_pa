import { useState, useEffect } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer"
import _ from "lodash";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요");
    console.log("uuu", userName);

    // emit(대화의 제목, 보낼 내용, 콜백함수)
    socket.emit("login", userName, (res) => {
      console.log("Res", res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  }

  useEffect(() => {
    askUserName();
  }, [])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log("Message", message);
      const time = new Date();
      const hour = time.getHours().toString().padStart(2, '0');
      const min = time.getMinutes().toString().padStart(2, '0');
      const timeS = `${hour}:${min}`
      if (!_.isUndefined(message)) {
        setMessageList((prev) => prev.concat({ ...message, time: timeS }));
        console.log("Messagelist", [...messageList, { ...message, time: timeS }])
      }
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage", res);
      setMessage("");
    })
  }

  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user} />
        <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
