import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './components/navigators/StackNavigator';

const DetailScreenApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default DetailScreenApp;
