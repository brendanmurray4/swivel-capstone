import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

import LoginPage from './LoginPage';
import { MapPage } from './MapPage';
import { DelegatorPage } from './DelegatorPage';
import { gethttp } from './GetHttp';


export default function App() {

  var temp1 = "test"
  var temp2 = "test2"
  // [temp1, temp2] = gethttp();

  return (
    // [temp1, temp2] = gethttp();
    <View>
      <Text> "test" </Text>
    </View>

    // // NAVIGATE BETWEEN PAGES
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
  );
}

/* NAVIGATE BETWEEN PAGES */
const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Map" component={MapPage} />
      <Stack.Screen name="Delegator" component={DelegatorPage} />
    </Stack.Navigator>
  );
}