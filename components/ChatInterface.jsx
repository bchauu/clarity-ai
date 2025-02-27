// components/ChatInterface.jsx
import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import AIResponseHandler from "../utils/AIReponseHandler";

export default function ChatInterface({ category }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    
    const aiResponse = await AIResponseHandler(input, category);
    setMessages([...messages, userMessage, { text: aiResponse, sender: "ai" }]);
  };

  return (
    <div className="chat-container">
      <h2>Category: {category}</h2>
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
