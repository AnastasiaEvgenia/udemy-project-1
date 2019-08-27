import React from 'react';
import './UserInput.css';

function UserInput(props) {

  return (
    <div className="userInput">
    	<label htmlFor="userInput">User Input</label>
        <input 
        	id="userInput" 
        	type="text" 
        	name="userInput" 
        	placeholder="Enter your text.."
        	onChange={props.handleInput}
        	value={props.currentName}
        />
    </div>
  );
}

export default UserInput;
