import React, { useState } from "react";

// Function to handle the API request
const fetchChatResponse = async (items, quantity) => {
  try {
    const response = await fetch(`http://localhost:8080/recipe?items=${items}&quantity=${quantity}`);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, something went wrong.";
  }
};

function RecipeComponent() {
  const [items, setItems] = useState('');
  const [quantity, setQuantity] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const askAi = async () => {
    if (!items.trim() || !quantity.trim()) {
      alert("Please enter both items and quantity.");
      return;
    }

    const prompt = `${items} - ${quantity}`;
    setChatHistory([...chatHistory, { sender: 'user', message: prompt }]);

    setIsLoading(true);
    setChatResponse('');
    try {
      const data = await fetchChatResponse(items, quantity);
      setChatResponse(data);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', message: data },
      ]);
    } catch (error) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', message: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChatHistory = () => {
    setChatHistory([]);
    setChatResponse('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      askAi();
      setItems('');
      setQuantity(''); 
    }
  };

  return (
    <div className="chat-container">
      <h2 className="component-header">Receipe Finder</h2>
      <div className="input-container">
        <input
          type="text"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          placeholder="Enter the Food you Need or The Incredeients you Have"
          onKeyDown={handleKeyDown} 
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter your Quantity of People"
          onKeyDown={handleKeyDown} 
        />
        <button type="submit" onClick={askAi} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Send'}
        </button>

        <button onClick={clearChatHistory} className="clear-history-btn">
          Clear History
        </button>

        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <ChatBubble key={index} sender={chat.sender} message={chat.message} />
          ))}
          {isLoading && (
            <div className="chat-bubble">
              <p>Thinking...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ sender, message }) {
  const formatMessage = (msg) => {
    // Example: Replace newline characters with <br> elements
    return msg.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className={`chat-bubble ${sender}`}>
      <div className="message-content">
        <p>{formatMessage(message)}</p>
      </div>
    </div>
  );
}

export default RecipeComponent;
