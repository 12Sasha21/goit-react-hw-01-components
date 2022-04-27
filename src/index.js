import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let items = document.querySelectorAll('.stat-list__item');

for (let item of items) {
  item.style.background = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
}
