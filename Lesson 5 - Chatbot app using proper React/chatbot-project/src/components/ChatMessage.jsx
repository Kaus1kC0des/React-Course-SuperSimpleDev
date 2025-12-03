import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="Robot"
          className="chat-message-profile avatar"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="User Avatar"
          className="chat-message-profile avatar"
        />
      )}
    </div>
  );
}
