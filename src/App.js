import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

function App() {
    const [userName, setUserName] = useState('Dimitri');

    const handleInput = (evt) => {
        setUserName(evt.target.value);
    };

    return (
      <div className="App">
          <UserInput 
             handleInput={handleInput}
             currentName={userName}
          />
          <UserOutput
              userName="Evgenia"
          />
          <UserOutput 
              userName={userName}    
          />
      </div>
    );
}

export default App;
