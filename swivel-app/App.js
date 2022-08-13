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
  

  return (
    gethttp()
    // // NAVIGATE BETWEEN PAGES
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>

  //   <View style={styles.container}>
  //   <Text>Swivel Delegator Page</Text>
  //   <StatusBar style="auto" />

  //   <Text style={[styles.title, styles.setColor]}>
  //     Please press this button to unlock the delegator
  //   </Text>

  //   {/* This is the delegator button */}
  //   <TouchableOpacity style={styles.delegator_button}>
  //     <Text style={[styles.title, styles.setColorGreen]}>Unlock Delegator</Text>
  //   </TouchableOpacity>

  //   {/* BACK BUTTON */}
  //   <TouchableOpacity style={styles.back_button} onPress={() => navigation.goBack()}>
  //     <Text style={[styles.title, styles.setColorWhite]}>Back</Text>
  //   </TouchableOpacity>
  // </View>
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