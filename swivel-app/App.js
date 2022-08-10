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
      <Stack.Screen name="Map" component={MapPage} />
      <Stack.Screen name="Delegator" component={DelegatorPage} />
    </Stack.Navigator>
  );
}

/* INITIAL SIGN IN PAGE */
function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/temp2.jpg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} width="35%" source={require('./assets/swivel_logo.png')} />

          <StatusBar style="auto" />
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

          <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('Map')}>
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

// This will open the delegator if possible
const delegatorButtonPress = () => {
  alert('Delegator Unlocked ');
  // Enter code to unlock delegator
};

// Map Page which will track bike location
export function MapPage({ navigation }) {
  const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
  return (
    <View style={styles.container}>
      <Text>Swivel Map</Text>
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

// Page to unlock delegator
export function DelegatorPage({ navigation }) {
  const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
  return (
    <View style={styles.container}>
      <Text>Swivel Delegator Page</Text>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.setColor]}>
        Please press this button to unlock the delegator
      </Text>

      {/* This is the delegator button */}
      <TouchableOpacity style={styles.delegator_button} onPress={() => delegatorButtonPress()}>
        <Text style={[styles.title, styles.setColorGreen]}>Unlock Delegator</Text>
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

  // Login Page

  image: {
    marginBottom: 20,
    width: '80%',
    resizeMode: 'contain',
  },

  inputView: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  create_account: {
    height: 15,
    marginBottom: 10,
    color: '#FFFFFF',
  },

  forgot_button: {
    height: 15,
    marginBottom: 10,
    color: '#FFFFFF',
  },

  terms_service: {
    height: 15,
    marginBottom: 10,
    color: '#FFFFFF',
  },

  login_button: {
    width: '80%',
    height: '5%',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#C0FF02',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  //END login page

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

  // Begin Delegator Page

  delegator_button: {
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

  // End delegator Page

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
