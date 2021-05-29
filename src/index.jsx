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
    {
      id: 'user02',
      avatar:
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user02.png',
      name: 'wetcxjfsj',
      text: "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
      likes: 50,
      dislikes: 10,
    },
  ];
  // const ZobrazeniVtipu = (jokes) => {
  //   for (let i = 0; i < length.jokes; i++) {
  //     <Joke
  //       userAvatar={jokes[i].avatar}
  //       userName={jokes[i].name}
  //       text={jokes[i].text}
  //       likes={jokes[i].likes}
  //       dislikes={jokes[i].dislikes}
  //     />;
  //   }
  //   return <Joke />;
  // };

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

// const App = () => (
//   <div>
//     {' '}
//     {cities.map((mesto) => {
//       return (
//         <div className="city" key={mesto}>
//           {mesto}
//         </div>
//       );
//     })}{' '}
//   </div>
// );
