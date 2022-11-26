import { Amplify } from 'aws-amplify';
import registerNNPushToken from 'native-notify';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';


import awsconfig from './src/aws-exports';
import Navigation from './src/navigation';
Amplify.configure(awsconfig);

export default function App(){
  registerNNPushToken(5009, 'zLGSh3bkdXv2IweqrDbIFD');
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

