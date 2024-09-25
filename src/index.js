/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // Not using React.StrictMode considering effect runs twice when the component mounts
    <App />
);



