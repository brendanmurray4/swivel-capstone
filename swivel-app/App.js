import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import Navigation from './src/navigation'
Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

/* INITIAL SIGN IN PAGE */
/*function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/temp2.jpg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.image}
            width="100%"
            source={require('./assets/swivel_logo.png')}
            justifyContent="space-between"
          />

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity
            style={styles.login_button}
            onPress={() => navigation.navigate('Delegator')}
          >
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.create_account, styles.white]}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.forgot_button, styles.white]}>Forgot Password</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.terms_service, styles.white]}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
*/
// This will open the delegator if possible
const delegatorButtonPress = () => {
  alert('Delegator Unlocked ');
  // Enter code to unlock delegator
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;