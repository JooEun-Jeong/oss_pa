import "./App.css";
import socket from "./server";

function App() {
  const [user, setUser] = useState(null);
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

  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
