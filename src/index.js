import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/style-768-1024.css'
import './styles/style-425-768.css'
import './styles/style-375-425.css'
import './styles/style-320-375.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);