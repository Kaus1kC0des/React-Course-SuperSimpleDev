import { useRef, useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({
  chatMessages,
  setChatMessages,
  isLoading,
  setIsLoading,
}) {
  const loadingImgURL = "https://supersimple.dev/images/loading-spinner.gif";
  const [inputText, setInputText] = useState("");
  const inputFieldRef = useRef(null);

  function updateInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setIsLoading(true);
    const chatMessagesCopy = [
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
    ];
    setChatMessages([...chatMessagesCopy, {}]);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...chatMessagesCopy,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
    setIsLoading(false);
  }

  function keyPress(event) {
    if (inputText === "") return;
    if (event.key === "Enter") {
      sendMessage().then(() => {
        console.log("Chatbot returned response!");
      });
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      {isLoading ? (
        <img src={loadingImgURL} className="loading-img" alt="Loading Icon" />
      ) : (
        <input
          placeholder="Enter your message here..."
          size="40"
          onChange={updateInputText}
          value={inputText}
          onKeyDown={keyPress}
          className="chat-input"
          ref={inputFieldRef}
        />
      )}
      <button
        onClick={sendMessage}
        disabled={inputText.trim() === "" || isLoading}
        className="send-button"
      >
        Send Message
      </button>
    </div>
  );
}
