import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

import TodoListScreen from './components/screens/TodoListScreen';

const DetailScreenApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TodoListScreen />
      </PersistGate>
    </Provider>
  );
};

export default DetailScreenApp;
