import { StatusBar } from 'expo-status-bar';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { useState, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

// // Map Page which will track bike location
// export function MapPage({ navigation }) {
//   const [delegatorStatus = 'LOCKED', setStatus] = useState('LOCKED');
//   let mymap = new MapComponent.render
//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Swivel Map</Text>
//   //     <StatusBar style="auto" />

//   //     <Text style={[styles.title, styles.setColor]}>Insert map tracking</Text>

//   //     {/* This is the bike selection button */}
//   //     <TouchableOpacity style={styles.bike_button} onPress={() => navigation.navigate('Delegator')}>
//   //       <Text style={[styles.title, styles.setColorGreen]}>Select Bike</Text>
//   //     </TouchableOpacity>

//   //     {/* BACK BUTTON */}
//   //     <TouchableOpacity style={styles.back_button} onPress={() => navigation.goBack()}>
//   //       <Text style={[styles.title, styles.setColorWhite]}>Back</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   // );
// }

// Generates MAP
export class MapPage extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={{
          lat: 49.277748,
          lng: -122.90905,
        }}
      >
        <Marker
          title="This is the Bike that you own"
          name="Your Bike"
          position={{ lat: 49.277748, lng: -122.90905 }}
        />
      </Map>
    );
  }
}

MapPage = GoogleApiWrapper({
  // apiKey: 'AIzaSyDQb2D3DmrvmViMIgHgvDAhPo1y9bB8zCM',
})(MapPage);

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
