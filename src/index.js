import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
 }
 
 li {
   list-style: none;   
 }
`
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <GlobalStyle />
   <App />
 </React.StrictMode>
);
 
reportWebVitals();