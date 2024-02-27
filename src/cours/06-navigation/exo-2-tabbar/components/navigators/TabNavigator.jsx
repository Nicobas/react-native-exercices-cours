import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TodoListScreen from '../screens/TodoListScreen';
import RegisterValidationScreen from '../screens/RegisterValidationScreen';
import DataListScreen from '../screens/DataListScreen';
import FlexboxScreen from '../screens/FlexboxScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="TodoList"
        component={TodoListScreen}
        options={{
          tabBarLabel: 'Todo list',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="th-list" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterValidationScreen}
        options={{
          tabBarLabel: 'Inscription',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="user-plus" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="DataList"
        component={DataListScreen}
        options={{
          tabBarLabel: 'Liste',
          tabBarIcon: ({focused, color, size, name}) => {
            return (
              <FontAwesome name="align-justify" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="FlexBox"
        component={FlexboxScreen}
        options={{
          tabBarLabel: 'Flex box',
          tabBarIcon: ({focused, color, size, name}) => {
            return <FontAwesome name="th-large" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
