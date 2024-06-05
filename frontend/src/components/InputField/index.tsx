import React, { useState } from "react";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import "./InputField.css";
import { AlertModal } from "../Alert";

interface InputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (event: any) => void;
}

const InputField: React.FC<InputProps> = ({
  message,
  setMessage,
  sendMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <div className="input-area">
      <button className="plus-button" onClick={onOpen}>
        +
      </button>
      <AlertModal isOpen={isOpen} onClose={onClose} />
      <form onSubmit={sendMessage} className="input-container">
        <Input
          placeholder="Type in here…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          multiline={false}
        />

        <Button disabled={message === ""} type="submit" className="send-button">
          전송
        </Button>
      </form>
    </div>
  );
};

export default InputField;
