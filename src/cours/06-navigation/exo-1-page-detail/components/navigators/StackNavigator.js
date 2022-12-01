import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TodoListScreen from '../screens/TodoListScreen';
import TodoListDetailScreen from '../screens/TodoListDetailScreen';

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="TodoListDetail" component={TodoListDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
