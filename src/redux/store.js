import { createStore, applyMiddleware } from 'redux';
// add middleware to store so that whenever actions get fired/dispatched, we can catch and then display them
// then middlewares (piece between actions firing and root reducer) are functions that receive actions, then do something with them, then passes to rootReducer
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// for local/session storage persistance.  Allows browser to cache store
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares = [thunk];

// push middlewares into middlewares array if env is development
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of store
const persistor = persistStore(store);

export { store, persistor };
