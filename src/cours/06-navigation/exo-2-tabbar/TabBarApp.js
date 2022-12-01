import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './components/navigators/StackNavigator';

const TabBarApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default TabBarApp;
