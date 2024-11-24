import React, { useState } from "react";

function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const askAi = async () => {
    if (!prompt.trim()) return;
    setChatHistory([...chatHistory, { sender: 'user', message: prompt }]);

    setIsLoading(true);
    setChatResponse('');
    try {
      const response = await fetch(`http://localhost:8080/?message=${prompt}`);
      const data = await response.text();
      console.log(data);
      setChatResponse(data);

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', message: data },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', message: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to clear chat history
  const clearChatHistory = () => {
    setChatHistory([]);  // Reset chat history to an empty array
  };

  // Handle pressing Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent default Enter behavior (line break)
      askAi();  // Trigger the message send
    }
  };

  return (
    <div className="chat-container">
      <h2 className="component-header">JiJu AI</h2>
      <div className="input-container">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          onKeyDown={handleKeyDown}  // Add onKeyDown event
        />
        <button type="submit" onClick={askAi} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Send'}
        </button>

        {/* Clear History Button */}
        <button 
          onClick={clearChatHistory} 
          className="clear-history-btn">
          Clear History
        </button>
        
        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <ChatBubble key={index} sender={chat.sender} message={chat.message} />
          ))}
          {isLoading && (
            <div className="chat-bubble">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ sender, message }) {
  return (
    <div className={`chat-bubble ${sender}`}>
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatComponent;
