import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke/index.jsx';
import { jokes } from './jokes';

const App = () => {
  return (
    <div>
      {jokes.map((vtip) => {
        return (
          <Joke
            userAvatar={vtip.avatar}
            userName={vtip.name}
            text={vtip.text}
            likes={vtip.likes}
            dislikes={vtip.dislikes}
            key={vtip.id}
          />
        );
      })}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
