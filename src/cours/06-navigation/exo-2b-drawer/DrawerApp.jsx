import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './components/navigators/StackNavigator';

const DrawerApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default DrawerApp;
