import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke/index.jsx';

const App = () => <Joke />;

render(<App />, document.querySelector('#app'));
