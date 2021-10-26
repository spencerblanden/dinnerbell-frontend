import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'; // changing index.css to styles.scss;
import App from './App';
import reportWebVitals from './reportWebVitals';
// install and config react router
import { BrowserRouter as Router } from 'react-router-dom';

// HOC pattern - Higher Order Component = Higher Order Function
// HOF higher order function is a function that returns another function
ReactDOM.render( 
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') 
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
