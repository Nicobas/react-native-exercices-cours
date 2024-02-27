import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';
import TodoListDetailScreen from '../screens/TodoListDetailScreen';

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="TodoListDetail" component={TodoListDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
