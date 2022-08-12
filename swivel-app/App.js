import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import { DelegatorPage } from './DelegatorPage';
import LoginPage from './LoginPage';
import {MapContainer} from './MapPage';

export default function App() {
  return (
    // NAVIGATE BETWEEN PAGES
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

/* NAVIGATE BETWEEN PAGES */
const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Map" component={MapContainer} />
      <Stack.Screen name="Delegator" component={DelegatorPage} />
    </Stack.Navigator>
  );
}

