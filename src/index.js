import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // component we wrap around the application, gives all routing functionality to component it wraps
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './App';

import './index.css';

ReactDOM.render(
  // Provider is a component class from react-redux that once passed the store object, will be able to give that redux store context to the rest of the application so that we can dispatch actions to that store or pull values off of the store and into the code
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
