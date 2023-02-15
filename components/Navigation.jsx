import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Todo' }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ title: 'Add new task' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
