import React from 'react';

import onlineIcon from '../../icons/wireless-symbol.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    </div>
    { users
        ? (
          <div>
            <div className="logoChatNameT">
          <h1 className="chatNameT">Chat app</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/3036/3036945.png" alt="Logo" />
          </div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;