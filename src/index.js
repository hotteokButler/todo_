import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Reset.css';
import './css/index.css';
import ToDo from './components/ToDo';
import { DarkModeProvider } from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ToDo />
    </DarkModeProvider>
  </React.StrictMode>
);
