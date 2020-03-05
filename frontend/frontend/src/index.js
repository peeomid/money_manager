import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./store/index";
import { addTransaction } from "./actions/index";

import { Provider } from "react-redux";

window.store = store;
window.addTransaction = addTransaction;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
