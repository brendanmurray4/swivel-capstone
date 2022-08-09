import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
  
  return (
    <View style={styles.container}>
      <Text>Swivel App</Text>
      <StatusBar style="auto" />

      {/* Adds button to unlock Delegator */}
      <Text style={[styles.title, styles.setColor]}>
        Please press this button to unlock the delegator
      </Text>

      {/* This is the button */}      
      <TouchableOpacity
        style={[styles.delegator_button]}
        onPress={buttonPress}
        // onPress={() => setStatus('UNLOCKED')}
      >
      <Text style={[styles.title, styles.setColorGreen]}>
        Delegator {delegatorStatus} 
      </Text>
      </TouchableOpacity>

    </View>

  );
}



const buttonPress = () => {
  alert('Delegator Unlocked ')
  // Enter code to unlock delegator
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setColorGreen : {
    color: '#39FF14'
  },
  setColorRed : {
    color: '#19FF14'
  },

  delegator_button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10
  },

});