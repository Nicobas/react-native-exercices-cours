import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as todoReducer} from './reducers/todoReducers';

// on combine nos reducers dans un reducer racine
const rootReducer = combineReducers({
  todo: todoReducer,
});

// on créé le store à partir de notre reducer racine
const store = configureStore({
  reducer: rootReducer,
});

export {store};
