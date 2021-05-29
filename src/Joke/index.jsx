import React from 'react';
import { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [palecNahoru, setPalecNahoru] = useState(likes);
  const [palecDolu, setPalecDolu] = useState(dislikes);

  const kliknabtnup = () => {
    setPalecNahoru(palecNahoru + 1);
  };

  const kliknabtndown = () => {
    setPalecDolu(palecDolu + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            value={palecNahoru}
            onClick={kliknabtnup}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {palecNahoru}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            value={palecDolu}
            onClick={kliknabtndown}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {palecDolu}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Joke;
