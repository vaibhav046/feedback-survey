import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//dev test only
import axios from 'axios';

window.axios = axios;
//dev test only

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.render(
    <Provider store={store}> <BrowserRouter><App /></BrowserRouter></Provider>,
    document.querySelector('#root')
);
