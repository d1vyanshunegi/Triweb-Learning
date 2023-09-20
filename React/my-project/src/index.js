import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {ContextFavourite} from './store/contextFavourite'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFavourite>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextFavourite>
  
);
