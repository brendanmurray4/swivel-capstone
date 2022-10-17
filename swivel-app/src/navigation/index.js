import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Auth} from 'aws-amplify'
import SignInScreen from '../screens/SignInScreen';
import MapScreen from '../screens/MapScreen';
import { useEffect } from 'react';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);
  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
    setUser(authUser);
  };
 useEffect(() => {
    checkUser();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MapScreen" component={MapScreen} />
        ) : (
          <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
