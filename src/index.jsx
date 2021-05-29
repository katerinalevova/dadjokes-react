import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [palecNahoru, setPalecNahoru] = useState(0);
  const [palecDolu, setPalecDolu] = useState(0);

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
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
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

render(<App />, document.querySelector('#app'));
