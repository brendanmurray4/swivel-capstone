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

import { gethttp } from './GetHttp';

// Map Page which will track bike location
export function MapPage({ navigation }) {
  const receivedData = gethttp();
  console.log("Received on this end" + receivedData)
  const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
  return (
    <View style={styles.container}>
      <Text>Swivel Map</Text>
      {/* <Text> key is: {receivedData[0]} </Text>
      <Text> latitude is: {receivedData[1]} </Text>
      <Text> longitude is: {receivedData[2]} </Text>
      <Text> acceleration is: {receivedData[3]} </Text> */}
      
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.setColor]}>Insert map tracking</Text>

      {/* This is the bike selection button */}
      <TouchableOpacity style={styles.bike_button} onPress={() => navigation.navigate('Delegator')}>
        <Text style={[styles.title, styles.setColorGreen]}>Select Bike</Text>
      </TouchableOpacity>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.back_button} onPress={() => navigation.goBack()}>
        <Text style={[styles.title, styles.setColorWhite]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

/* DEFAULT STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setColorGreen: {
    color: '#39FF14',
  },
  setColorRed: {
    color: '#19FF14',
  },
  setColorWhite: {
    color: '#FFFFFF',
  },

  // Begin
  bike_button: {
    width: '80%',
    height: '5%',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#000000',
  },
  // End bike page

  // Navigation Menu
  back_button: {
    width: '80%',
    height: '5%',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#000000',
    padding: 10,
  },
  //  END navigation menu
});
