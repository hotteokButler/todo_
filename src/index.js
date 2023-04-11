import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Reset.css';
import './css/index.css';
import ToDoList from './components/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
