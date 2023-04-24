import React from 'react';
import ReactDOM from 'react-dom/client';
import { gsap } from 'gsap';
import App from './App';
import './styles/index.scss';
import './styles/globals.scss';

gsap.defaults({
  duration: 1.5,
  ease: 'elastic',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
