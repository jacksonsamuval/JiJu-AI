import React, { useState } from 'react';
import './App.css';
import ChatComponent from './Components/ChatComponent';
import RecipeComponent from './Components/RecipeComponent';
import CareerCounserlor from './Components/CareerComponent';
import TravelComponent from './Components/TravelComponent';

//final

function App() {
  const [activeTab, setActiveTab] = useState('chat')

  const handleTabChange = (tab) => {
    
    setActiveTab(tab)
  };
  return (
    <div className="App">
      <button className={activeTab === 'chat'? 'active' : ''}
      onClick={() => handleTabChange('chat')}>
        Chat
        </button>
      <button className={activeTab === 'recipe-generator'? 'active' : ''}
      onClick={() => handleTabChange('recipe-generator')}>
        Recipe Generator
        </button>

        <button className={activeTab === 'travel'? 'active' : ''}
      onClick={() => handleTabChange('travel')}>
        Travel Partner
        </button>

        <button className={activeTab === 'career'? 'active' : ''}
      onClick={() => handleTabChange('career')}>
        Career Counselor
        </button>

        <div>
          {activeTab === 'chat' && <ChatComponent/>}
          {activeTab === 'recipe-generator' && <RecipeComponent/>}
          {activeTab === 'travel' && <TravelComponent/>}
          {activeTab === 'career' && <CareerCounserlor/>}
        </div>
    </div>
  );
}

export default App;
