import { useState, useEffect } from "react";

export default function FirstInteractionPrompt({ handleSend, loading, input, setInput, category }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

const userId = '123id';

  useEffect(() => {
    const fetchDiscoverySuggestions = async () => {

      try {
        const response = await fetch(`http://localhost:5050/api/discover?user_id=${userId}&category=${category}`);
        const data = await response.json();
        console.log('fetching data for discover', data)
        setSuggestions(data.suggestions);
      } catch (error) {
        console.error("❌ Error fetching discovery prompts:", error);
      }
    };

    fetchDiscoverySuggestions();
  }, [category, userId]);

  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        className="p-2 border rounded-lg w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question..."
      />
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Ask AI
      </button> */}
        <button onClick={handleSend} disabled={loading}>
            {loading ? "Thinking..." : "Send"}
        </button>
      <button
        className="text-blue-500 underline text-sm mt-1"
        onClick={() => setShowSuggestions(!showSuggestions)}
      >
        {showSuggestions ? "Hide " : `Curious about ${category}?`}
      </button>
      {showSuggestions && (
        <div className="mt-2 flex flex-col gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm"
              onClick={() => setInput(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
