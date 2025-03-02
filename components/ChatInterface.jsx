import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { askAI, getPrompt, getUserHistory } from "../service/api";
// import AIResponseHandler from "../utils/AIResponseHandler";
import FirstInteractionPrompt from "./FirstInteractionPrompt";

export default function ChatInterface({ userId, category }) {
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

    // Fetch dynamic prompts on load
    useEffect(() => {
      const fetchPrompts = async () => {
        const userId = '123id';
        try {
          const response = await fetch(`http://localhost:5050/api/prompts?user_id=${userId}&category=${category}`);
          const data = await response.json();
          // setMainPrompt(data.mainPrompt);
          setMessages([{ text: data.mainPrompt, sender: "system" }]);
          setSuggestions(data.suggestions);
        } catch (error) {
          console.error("❌ Error fetching prompts:", error);
        }
      };
  
      fetchPrompts();
    }, [category, userId]);

  useEffect(() => {
    const fetchHistory = async () => {
        const history = await getUserHistory(userId);
        if (history.length > 0) {
            setMessages(history.map(entry => ({ text: entry.user_input, sender: "user" })));
        }
    };

    fetchHistory();
}, [userId]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setMessages([...messages, { text: input, sender: "user" }]);
    const userId = '123id';

    const response = await askAI(userId, input, category);
    setMessages([...messages, { text: input, sender: "user" }, { text: response, sender: "ai" }]);

    setInput("");
    setLoading(false);
};


  return (
    <div className="chat-container">
      <h2>{category === "cooking" ? "Cooking Assistant" : "Gaming Assistant"}</h2>

{/* Display main prompt */}
{/* <div className="main-prompt">{mainPrompt}</div> */}

{/* Display "Need Ideas?" suggestions */}
{suggestions.length > 0 && (
  <div className="suggestions">
    <h4>Need Ideas?</h4>
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => setInput(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  </div>
)}
        <div className="chat-box">
            {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
        </div>
        <FirstInteractionPrompt 
        handleSend={handleSend}
        loading={loading}
        input={input}
        setInput={setInput}
        category={category}
        />
    </div>
);
}
