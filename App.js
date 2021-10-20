import React from 'react';

import Account from './Account';
import Admin from './Admin';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}