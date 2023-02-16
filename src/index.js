import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import 'tachyons'
import { searchRobots, requestRobots } from './reducers';
import {createLogger} from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';


const logger = createLogger();
const rootReducers = combineReducers({requestRobots, searchRobots})
const store = legacy_createStore (rootReducers, applyMiddleware(thunkMiddleware, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
