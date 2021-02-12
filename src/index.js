import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // component we wrap around the application, gives all routing functionality to component it wraps
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

ReactDOM.render(
  // Provider is a component class from react-redux that once passed the store object, will be able to give that redux store context to the rest of the application so that we can dispatch actions to that store or pull values off of the store and into the code
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
