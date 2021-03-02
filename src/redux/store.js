import { createStore, applyMiddleware } from 'redux';
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
