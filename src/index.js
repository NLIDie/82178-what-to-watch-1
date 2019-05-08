import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App.jsx';

const main = () => {
  const root = document.getElementById(`root`);

  ReactDOM.render(<App />, root);
};

main();
