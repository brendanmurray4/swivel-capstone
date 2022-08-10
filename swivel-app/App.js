import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
  
  return (
    <View style={styles.container}>
      <Text>Swivel App</Text>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.setColor]}>
        Please press this button to unlock the delegator
      </Text>

      {/* This is the delegator button */}      
      <TouchableOpacity
        style={[styles.delegator_button]}
        onPress={delegatorButtonPress}
        // onPress={() => setStatus('UNLOCKED')} 
      >
        <Text style={[styles.title, styles.setColorGreen]}>
          Delegator {delegatorStatus} 
        </Text>
      </TouchableOpacity>

    </View>
  );
}


// This will open the delegator if possible
const delegatorButtonPress = () => {
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