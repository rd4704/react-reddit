import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const jsonData = require('./database.json');

ReactDOM.render(
  <App jsonObj={jsonData} />,
  document.getElementById('root')
);
