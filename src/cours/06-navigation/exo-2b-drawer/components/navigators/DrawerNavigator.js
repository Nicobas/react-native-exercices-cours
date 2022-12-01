import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TodoListScreen from '../screens/TodoListScreen';
import RegisterValidationScreen from '../screens/RegisterValidationScreen';
import DataListScreen from '../screens/DataListScreen';
import FlexboxScreen from '../screens/FlexboxScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="TodoList"
        component={TodoListScreen}
        options={{drawerLabel: 'Todo list'}}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterValidationScreen}
        options={{
          drawerLabel: 'Inscription',
        }}
      />
      <Drawer.Screen
        name="DataList"
        component={DataListScreen}
        options={{drawerLabel: 'Liste'}}
      />
      <Drawer.Screen
        name="FlexBox"
        component={FlexboxScreen}
        options={{drawerLabel: 'Flex box'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
