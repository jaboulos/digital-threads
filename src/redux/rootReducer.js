import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// local storage from browser
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  // persist reducers to storage
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// modified version of rootReducer with persistance capabilities
export default persistReducer(persistConfig, rootReducer);
