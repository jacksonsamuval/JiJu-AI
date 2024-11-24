import React, { useState } from "react";

// Function to handle the API request
const fetchChatResponse = async (location, price,noPeople) => {
  try {
    const response = await fetch(`http://localhost:8080/travelPartner?location=${location}&price=${price}&noPeople=${noPeople}`);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, something went wrong.";
  }
};

function TravelPartner() {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [noPeople, setNoPeople] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const askAi = async () => {
    if (!location.trim() || !price.trim() || !noPeople.trim()) {
      alert("Please enter both location, price and Number of People.");
      return;
    }

    const prompt = ` Location: ${location} - Price : ${price} - Number of People : ${noPeople}`;
    setChatHistory([...chatHistory, { sender: 'user', message: prompt }]);

    setIsLoading(true);
    setChatResponse('');
    try {
      const data = await fetchChatResponse(location, price);
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
      setLocation('');
      setPrice('');
      setNoPeople('');
    }
  };

  return (
    <div className="chat-container">
      <h2 className="component-header"> Travel Partner</h2>
      <div className="input-container">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyDown={handleKeyDown} 
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter your price range"
          onKeyDown={handleKeyDown} 
        />

        <input
          type="text"
          value={noPeople}
          onChange={(e) => setNoPeople(e.target.value)}
          placeholder="Enter Number of People"
          onKeyDown={handleKeyDown} 
        />

        <button type="submit" onClick={askAi} disabled={isLoading}>
          {isLoading ? 'Thinking...' : 'Send'}
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

export default TravelPartner;
