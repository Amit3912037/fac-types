import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import { Provider } from "react-redux";

import './index.css'
import storee from "./store";


ReactDOM.render(
  <Provider store={storee}>
    <App />
  </Provider>,
  document.getElementById('root')
);



