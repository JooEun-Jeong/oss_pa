import { useState, useEffect } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
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

  const sendMessage = () => {

  }

  return (
    <div>
      <div className="App">
        <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
