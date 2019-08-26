import React, {useContext, useReducer } from 'react';
import TodoContext from './context.js';
import TodoReducer from './reducers.js';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
//Used when exported as default.
//import App from './App';

ReactDOM.render(
  <App />, document.getElementById('root'));
