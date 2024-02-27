import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';

import TodoListScreen from './components/screens/TodoListScreen';

const DetailScreenApp = () => {
  return (
    <Provider store={store}>
      <TodoListScreen />
    </Provider>
  );
};

export default DetailScreenApp;
