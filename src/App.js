
import './App.css';
import newLogo from './newlogo.png';
import './styles.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProfileSidebar from './ProfileSidebar';
import warrior_w1 from './warrior_wives1.jpg';
import warrior_w2 from './warrior_wives2.jpg';
import EventCreationPage from './EventCreationPage';
import FormDialog from './EventCreationPopup';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  return (
      
    
    <div className='App'>

      
      <div className="scroll-container">
        
      <ProfileSidebar />
      <SearchBar onSearch={handleSearch} />
      
      <FormDialog />
      <button className="colored-button1">Friends</button>
      <a href="https://maps.google.com/"><button className="colored-button2">Maps</button></a>
      <button className="colored-button3">Live-Chat Bot</button>
       <img src={newLogo} className="aimage" />
       <img src={warrior_w1} className='wimage'/>
       <img src={warrior_w2} className='wimage1'/>
      </div>
     
      </div> 
  );
}

export default App;
