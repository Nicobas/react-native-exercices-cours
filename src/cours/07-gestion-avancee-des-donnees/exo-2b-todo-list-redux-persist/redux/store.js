import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import {reducer as todoReducer} from './reducers/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

// on configure la persistance pour lui indiquer de stocker les données dans le AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// on créé un reducer persistant à partir de notre rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store, persistor};
