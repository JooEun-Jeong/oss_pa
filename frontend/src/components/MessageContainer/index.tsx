import React from "react";
import "./MessageContainer.css";
import { Container } from "@mui/system";
import _ from "lodash";
import { Messages, User } from "../../interfaces";

interface MesConProps {
  messageList: Messages;
  user: User | null;
}

const MessageContainer: React.FC<MesConProps> = ({ messageList, user }) => {
  return (
    <div>
      {_.isArray(messageList) && !_.isNull(user) ? (
        messageList.map((message, index) => {
          return (
            <Container key={message._id} className="message-container">
              {message.user.name === "system" ? (
                <div className="system-message-container">
                  <p className="system-message">{message.chat}</p>
                </div>
              ) : message.user.name === user.name ? (
                <div className="my-message-container">
                  <div className="time">{message.time}</div>
                  <div className="my-message">{message.chat}</div>
                </div>
              ) : (
                <div className="your-message-container">
                  <div className="im">
                    <div className="imName">{message.user.name}</div>
                    <img
                      src="/profile.jpeg"
                      className="profile-image"
                      alt="profile_image"
                      style={
                        (index === 0
                          ? { visibility: "visible" }
                          : messageList[index - 1].user.name === user.name) ||
                        messageList[index - 1].user.name === "system"
                          ? { visibility: "visible" }
                          : { visibility: "visible" }
                      }
                    />
                  </div>
                  <div className="your-message">{message.chat}</div>
                  <div className="time">{message.time}</div>
                </div>
              )}
            </Container>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default MessageContainer;
