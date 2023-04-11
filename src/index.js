import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Reset.css';
import './css/index.css';
import ToDo from './components/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);
