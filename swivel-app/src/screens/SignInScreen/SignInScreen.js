import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/temp2.jpg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.image}
            width="100%"
            source={require('../../../assets/swivel_logo.png')}
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
            onPress={() => navigation.navigate('MapScreen')}
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
};
/* DEFAULT STYLES */
const styles = StyleSheet.create({
  image: {
    display: 'flex',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 100,
    paddingTop: 10,
  },

  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'column',
  },

  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '100%',
    minHeight: '25%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
  },

  dataContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  dataHeader: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: '700',
    color: '#474343',
    marginBottom: 5,
  },

  dataValue: {
    fontSize: 14,
    color: '#000000',
  },

  unlockButton: {
    backgroundColor: '#B4FF39',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 25,
    marginBottom: 20,
  },

  unlockButtonDisabled: {
    backgroundColor: '#BFC0BD',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 25,
    marginBottom: 20,
  },

  unlockButtonText: {
    fontWeight: 'bold',
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  modalBackground: {
    minHeight: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default SignInScreen;
