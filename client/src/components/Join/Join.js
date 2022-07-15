import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
          <div className="logoChatName">
          <h1 className="chatName">Chat app</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/3036/3036945.png" alt="Logo" />
          </div>
      <div className="joinInnerContainer">
        <h1 className="heading">Login</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link  onClick={e => (!name || !room) ? e.preventDefault() : null} 
        to={`/chat?name=${name}&room=${room}`}>
          <button className='button mt-20' type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    );
};

export default Join;