import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';
import {BrowserRouter} from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './css/index.css'
ReactDOM.render(
  <React.StrictMode >
    <BrowserRouter><App></App></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
