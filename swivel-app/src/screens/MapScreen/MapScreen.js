import { useNavigation } from '@react-navigation/native';
import { Auth, selectInput } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import CustomButton from '../../components/CustomButton';
import { headerFooterStyles, generateHeader, generateFooter } from '../Header_Footer/HeaderFooter';
Geocoder.init('AIzaSyBmjnH37clBAaGKN4R6Ji-qqUM3w8Lk2Js');

// Page to unlock delegator
const MapScreen = () => {
  const [telemetry, setTelemetry] = React.useState(undefined);
  const [tasks, setTasks] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();
  const [SelectedBike, setSelectedBike] = React.useState(0);
  const [AvailableBikes] = useState([
    // replace this with an API Fetch
    {
      key: 0,
      bikeName: 'Townie Original 7D',
      location: {
        longitude: -122.90730537910062,
        latitude: 49.27997279477743,
      },
      rating: '4.7/5',
      price: '4.60',
      time: '5d 2h',
      image: require('../../../assets/bikeSelection/bike1.jpg'),
    },
    {
      key: 1,
      bikeName: 'Domane+ ALR',
      location: {
        longitude: -122.90858136763505,
        latitude: 49.27832317062849,
      },
      rating: '4.1/5',
      price: '3.61',
      time: '3d 5h',
      image: require('../../../assets/bikeSelection/bike2.jpg'),
    },
    {
      key: 2,
      bikeName: 'Boone 6',
      location: {
        longitude: -122.9042562339713,
        latitude: 49.27823110281287,
      },
      rating: '4.9/5',
      price: '6.81',
      time: '4d 5h',
      image: require('../../../assets/bikeSelection/bike3.jpg'),
    },
    {
      key: 3,
      bikeName: 'Checkpoint ALR 5 Driftless',
      location: {
        longitude: -122.91382570898952,
        latitude: 49.27651388289689,
      },
      rating: '3.7/5',
      price: '12.52',
      time: '2d 1h',
      image: require('../../../assets/bikeSelection/bike4.jpg'),
    },
  ]);
  const onCheckoutPressed = () => {
    const image = SelectedBike.image;
    const name = SelectedBike.bikeName;
    const rating = SelectedBike.rating;
    const price = SelectedBike.price;
    const time = SelectedBike.time;
    let location = '';

    Geocoder.from(SelectedBike.location.latitude, SelectedBike.location.longitude)
      .catch((error) => console.log(error))
      .then((loc) => {
        location =
          loc.results[1].address_components[0].long_name +
          ' ' +
          loc.results[1].address_components[1].long_name +
          ', ' +
          loc.results[1].address_components[2].long_name;
        NavigateToNextPage(image, name, location, rating, price, time);
      });
  };

  function NavigateToNextPage(image, name, location, rating, price, time) {
    navigation.navigate('Purchase', {
      image,
      name,
      location,
      rating,
      price,
      time,
    });
  }

  useEffect(() => {
    const updateInterval = setInterval(() => {
      fetch('http://iot.swivel.bike/telemetry/1')
        // .then((resp) => resp.json()) // PLEASE UNCOMMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .then((resp) => {
          setTelemetry(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch('http://iot.swivel.bike/control/1')
        // .then((resp) => resp.json()) // PLEASE UNCOMMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/swivel_login_background.jpg')}
      >
        <View style={headerFooterStyles.header}>{generateHeader()}</View>
        <View style={headerFooterStyles.body}>
          <CustomButton
            text={
              SelectedBike == 0
                ? 'Select a bike '
                : 'Tap to rent: ' + SelectedBike.bikeName + ' for $' + SelectedBike.price + '/hr'
            }
            onPress={onCheckoutPressed}
            alignItems="right"
          />
          <View style={styles.container}>
            {true && (
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
                      latitude: 49.277748,
                      longitude: -122.90905,
                    }}
                    icon={require('../../../assets/user_location_map_enlarged.png')}
                  />
                  {AvailableBikes
                    ? AvailableBikes.map((bike) => (
                        <Marker
                          coordinate={{
                            latitude: bike.location.latitude,
                            longitude: bike.location.longitude,
                          }}
                          title={bike.bikeName}
                          description={'★' + bike.rating + '\n' + '$' + bike.price + '/hour'}
                          icon={require('../../../assets/available_bike_map_enlarged.png')}
                          onPress={() => {
                            setSelectedBike(bike);
                            // console.log(SelectedBike);
                          }}
                        />
                      ))
                    : null}
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
          </View>
        </View>
        <View style={headerFooterStyles.footer}>{generateFooter()}</View>
      </ImageBackground>
    </View>
  );
};

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
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // width: '100%',
    flexDirection: 'column',
  },

  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '90%',
    minHeight: '25%',
    borderRadius: 20,
    paddingHorizontal: 25,
    // paddingTop: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: '3%',
    left: '5%',
    right: '5%',
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
});
export default MapScreen;
