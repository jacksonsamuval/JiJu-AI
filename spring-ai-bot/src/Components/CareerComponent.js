import React, { useState } from "react";

// Function to handle the API request
const fetchChatResponse = async (skills, experience) => {
  try {
    const response = await fetch(`http://192.168.5.52:8080/careerCounselor?skills=${skills}&experience=${experience}`);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, something went wrong.";
  }
};

function CareerCounserlor() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const askAi = async () => {
    if (!skills.trim() || !experience.trim()) {
      alert("Please enter both Skills and Experience.");
      return;
    }

    const prompt = `${skills} - ${experience}`;
    setChatHistory([...chatHistory, { sender: 'user', message: prompt }]);

    setIsLoading(true);
    setChatResponse('');
    try {
      const data = await fetchChatResponse(skills, experience);
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
      setSkills('');
      setExperience('');
    }
  };

  return (
    <div className="chat-container">
      <h2 className="component-header">Career Counserlor</h2>
      <div className="input-container">
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter Skills"
          onKeyDown={handleKeyDown} 
        />
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Enter your Experience"
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

export default CareerCounserlor;
