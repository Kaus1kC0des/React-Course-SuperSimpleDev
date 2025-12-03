import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="app-container">
      {chatMessages.length > 0 ? (
        <ChatMessages chatMessages={chatMessages} />
      ) : (
        <h1 style={{ fontWeight: 100 }}>
          Welcome to the chatbot project! Send a message using the textbox below
        </h1>
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
