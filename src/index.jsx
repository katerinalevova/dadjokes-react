import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke/index.jsx';

const App = () => {
  const jokes = [
    {
      id: 'user01',
      avatar:
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
      name: 'Neroxx',
      text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
      likes: 13,
      dislikes: 24,
    },
  ];

  return (
    <>
      <Joke
        userAvatar={jokes[0].avatar}
        userName={jokes[0].name}
        text={jokes[0].text}
        likes={jokes[0].likes}
        dislikes={jokes[0].dislikes}
      />
    </>
  );
};

render(<App />, document.querySelector('#app'));
