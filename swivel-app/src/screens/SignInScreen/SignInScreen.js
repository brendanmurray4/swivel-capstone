import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPress = async (data) => {
    //Do validation
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.email, data.password);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onCreateAccountPress = () => {
    navigation.navigate('CreateAccount');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/temp2.jpg')}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Image
          source={require('../../../assets/swivel_logo.png')}
          style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{ required: 'Username is required' }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />
        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPress)}
        />
        <CustomButton text="Forgot password?" onPress={onSignUpPress} type="TERTIARY" />
      </ImageBackground>
    </View>
  );
};
/* DEFAULT STYLES */
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  container: {
    flex: 1,
  },
});

export default SignInScreen;
