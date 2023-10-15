import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Provider from './context/Provider';
import {BrowserRouter} from "react-router-dom";


//whatever will be below will be access the upper key 
//so app will be access to browser router and broser router will be access to provider
//but it is not opposite direction




ReactDOM.render(
  <Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </Provider>,
  document.getElementById("root")
);
