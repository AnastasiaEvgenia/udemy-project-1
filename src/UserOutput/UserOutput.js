import React from 'react';
import './UserOutput.css'; 

function UserOutput(props) {

	const paragraph = {
		backgroundColor: '#CDCDCD'
	};

  return (
    <div className="userOutput">
        <p>Username: {props.userName}</p>
        <p style={paragraph}>Eiusmod anim aute dolor aliquip tempor exercitation aliquip dolore occaecat proident aute aliqua deserunt ea amet in.</p>
    </div>
  );
}

export default UserOutput;
