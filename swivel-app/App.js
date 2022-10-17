import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  Modal,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

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
    <Stack.Navigator screenOptions={{ headerShown: false }} defaultScreenOptions={DelegatorPage}>
      <Stack.Screen name="Purchase Page" component={PurchasePage} />
      <Stack.Screen name="Delegator" component={DelegatorPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Map" component={MapPage} />
    </Stack.Navigator>
  );
}

/* INITIAL SIGN IN PAGE */
function PurchasePage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={purchaseStyles.container}>
      <View style={purchaseStyles.top}>
        <Image
          style={{ resizeMode: 'cover', height: '100%', width: '100%' }}
          source={require('./assets/swivel_bike.png')}
        />
      </View>

      <View style={purchaseStyles.middle}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 26 }}>
          {' '}
          Emonda SLR 9 eTap
        </Text>
        <Text style={purchaseStyles.priceText}>
          {' '}
          $ 6.55
          <Text style={{ fontWeight: 'bold', color: '#BFC0BD', fontSize: 14, textAlign: 'center' }}>
            {' '}
            /Hour
          </Text>
        </Text>
      </View>

      <View style={purchaseStyles.middle2}>
        <Image
          style={{
            resizeMode: 'cover',
            height: '100%',
            width: '20%',
            resizeMode: 'contain',
            aspectRatio: 0.75,
            left: '2%',
          }}
          source={require('./assets/gps_icon.jpg')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#BFC0BD',
            fontSize: 22,
            textAlign: 'center',
            position: 'absolute',
            left: '20%',
            flexShrink: 1,
          }}
        >
          {' '}
          Science Rd, Burnaby, BC, Canada{' '}
        </Text>
      </View>
      <View style={purchaseStyles.middle2}>
        <Image
          style={{ resizeMode: 'cover', height: '100%', width: '20%', resizeMode: 'contain' }}
          source={require('./assets/clock_icon.jpg')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#BFC0BD',
            fontSize: 22,
            textAlign: 'center',
            position: 'absolute',
            left: '20%',
            flexShrink: 1,
            flexWrap: 'wrap',
          }}
        >
          Sept 20th, 8:00 AM to Sept 20th, 11:00 AM{' '}
        </Text>
      </View>

      <View style={purchaseStyles.bottom}>
        <ScrollView>
          <View style={purchaseStyles.bottom2}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 18,
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              {' '}
              Payment Summary
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 18,
                textAlign: 'right',
                fontWeight: 'bold',
              }}
            >
              {' '}
              $ 24.01
            </Text>
          </View>
          <View style={purchaseStyles.bottom2}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 18,
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              {' '}
              Hourly Cost
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 18,
                textAlign: 'right',
                fontWeight: 'bold',
              }}
            >
              {' '}
              $ 19.65
            </Text>
          </View>
          <View style={purchaseStyles.bottom2}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 18,
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              {' '}
              GST + PST
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 18,
                textAlign: 'right',
                fontWeight: 'bold',
              }}
            >
              {' '}
              $ 2.36
            </Text>
          </View>
          <View style={purchaseStyles.bottom2}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {' '}
              This is Scrollable...
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={purchaseStyles.confirmButton}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate('FinalPurchase')}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000000',
              fontSize: 26,
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Confirm{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
  const [telemetry, setTelemetry] = React.useState(undefined);
  const [tasks, setTasks] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      fetch('http://iot.swivel.bike/telemetry/1')
        .then((resp) => resp.json())
        .then((resp) => {
          setTelemetry(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch('http://iot.swivel.bike/control/1')
        .then((resp) => resp.json())
        .then((resp) => {
          setTasks(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => {
      window.clearInterval(updateInterval);
    };
  }, []);

  const addTask = (task) => {
    setIsLoading(true);
    fetch('http://iot.swivel.bike/control/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actions: [task],
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setTasks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeTask = (task) => {
    fetch('http://iot.swivel.bike/control/complete/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actions: [task],
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setTasks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFriendlyNetworkStatus = () => {
    if (!telemetry) {
      return 'Unknown';
    }
    const { grps } = telemetry;
    const { network_status } = grps;
    if (network_status === 0 || network_status === 2) {
      return 'Searching (Operator)';
    } else if (network_status === 1) {
      return 'Registered (Home)';
    } else if (network_status === 3) {
      return 'Registration Denied';
    } else if (network_status === 5) {
      return 'Registered (Roaming)';
    }
    return 'Unknown';
  };

  const isUnlockable = () => {
    if (isLoading) {
      return false;
    }
    if (!telemetry) {
      return false;
    }
    if (!tasks) {
      return false;
    }
    if (tasks && tasks.includes('UNLOCK')) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {telemetry && (
          <>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: telemetry ? telemetry.gps.latitude : 49.277748,
                longitude: telemetry ? telemetry.gps.longitude : -122.90905,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
              <Marker
                coordinate={{
                  latitude: telemetry.gps.latitude,
                  longitude: telemetry.gps.longitude,
                }}
                pinColor="black"
              />
            </MapView>
          </>
        )}
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataContainerRow}>
          <View>
            <Text style={styles.dataHeader}>Signal (RSSI)</Text>
            <Text style={styles.dataValue}>{telemetry ? telemetry.grps.rssi : '0'} dBm</Text>
          </View>
          <View>
            <Text style={styles.dataHeader}>Network</Text>
            <Text style={styles.dataValue}>{getFriendlyNetworkStatus()}</Text>
          </View>
        </View>
        <View style={styles.dataContainerRow}>
          <View>
            <Text style={styles.dataHeader}>Long</Text>
            <Text style={styles.dataValue}>{telemetry ? telemetry.gps.longitude : '0'}</Text>
          </View>
          <View>
            <Text style={styles.dataHeader}>Lat</Text>
            <Text style={styles.dataValue}>{telemetry ? telemetry.gps.latitude : '0'}</Text>
          </View>
          <View>
            <Text style={styles.dataHeader}>Alt</Text>
            <Text style={styles.dataValue}>{telemetry ? telemetry.gps.altitude : '0'}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={isUnlockable() ? styles.unlockButton : styles.unlockButtonDisabled}
            onPress={() => {
              if (isUnlockable()) {
                addTask('UNLOCK');
              } else {
                Alert.alert(
                  'Reset Delegator State?',
                  'Would you like to reset the list of tasks for the delegator?',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                      onPress: () => {},
                    },
                    {
                      text: 'Okay',
                      style: 'destructive',
                      onPress: () => {
                        removeTask('UNLOCK');
                      },
                    },
                  ]
                );
              }
            }}
          >
            <Text style={styles.unlockButtonText}>Unlock Bike</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

/* DEFAULT STYLES */
const purchaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    margin: 0,
  },
  top: {
    flex: 0.4,
    backgroundColor: 'grey',
    borderWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.1,
    // backgroundColor: "beige",
    borderWidth: 1,
  },
  middle2: {
    flex: 0.1,
    // backgroundColor: "beige",
    borderWidth: 1,
  },
  bottom: {
    flex: 0.25,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: "pink",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottom2: {
    // flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "pink",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  confirmButton: {
    flex: 0.05,
    backgroundColor: '#B4FF39',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    // marginTop: 25,
    marginBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  baseText: {
    // fontSize: 14,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  priceText: {
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: '#B4FF39',
  },
});

/* DEFAULT STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
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
