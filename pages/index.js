  // pages/index.js
  import { useState } from "react";
  import ChatInterface from "../components/ChatInterface";
  
  export default function Home() {
    const [category, setCategory] = useState(null);
  
    return (
      <div className="container">
        <h1>AI Shopping & Decision Assistant</h1>
        <div>
          <h2>Select a Category</h2>
          <button 
            onClick={() => setCategory(category === "gaming" ? null : "gaming")} 
            className={category === "gaming" ? "btn active" : "btn"}>
            Gaming
          </button>
          <button 
            onClick={() => setCategory(category === "cooking" ? null : "cooking")} 
            className={category === "cooking" ? "btn active" : "btn"}>
            Cooking
          </button>
        </div>
        {category && <ChatInterface category={category} />}
      </div>
    );
  }