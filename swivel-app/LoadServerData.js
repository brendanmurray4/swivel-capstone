// How to get data from HTTP?
// 4 Objects are obtained in an array format
// {ID, latitude, longitude, acceleration}
// will be returned as an array
// array[0] = ID, array[1] = latitude...

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

// Function returns [latitude, longitude], two variables based on destination address
export function LoadServerData() {
  const [isLoading, setLoading] = useState(null);
  const [data, setData] = useState([null]);

  const getDataFromServer = async () => {
    console.log('GetDataFromserver loaded');
    try {
      const response = await fetch('http://iot.swivel.bike/telemetry/1');
      const json = await response.json();
      setData(json); // replace with .latitude
      // setLongitude(json.data.message); // replace with .longitude
      console.log('\n0.1Received from server1: ' + json);
      console.log('0.2Received from server2: ' + json.data);
      console.log('0.3Received from server3: ' + json.data.gps.latitude);
      console.log('0.3Received from server4: ' + json.data.gps.longitude);
    } catch (error) {
      // Prints error if one occurs
      console.error(error);
    } finally {
      // We are no longer loading, the json file has loaded
      setLoading(false);
      console.log('LOADED');
    }
  };

  // Reacts AFTER render
  useEffect(() => {
    // This means that
    getDataFromServer();
  }, []); // Empty array means run only once

  if (isLoading || data.data == undefined || data.data == null) {
    return (
      <View style={styles.container}>
        <Text>Swivel Map Loading</Text>
        <Text> key is: LOADING </Text>
      </View>
    );
  } else if(data.data != undefined && data.data != null) {
    console.log("2. Should occur after 1");
    console.log('\n~Received from server1: ' + data);
    console.log('~Received from server2: ' + data.data);
    console.log('~Received from server3: ' + data.data.gps.latitude);
    console.log('~Received from server4: ' + data.data.gps.longitude);
    // return (
    //   <View style={styles.container}>
    //     <Text>Swivel Maps2</Text>
    //     <Text> key is: {data.data.gps.latitude} </Text>
    //   </View>
    // );
    var temp = data.data.gps.latitude;
    var temp1 = data.data.gps.longitude;
    return [temp, temp1];
  }

  // return (
  //   <View style={styles.container}>
  //     <Text>Swivel Map Loading</Text>
  //     <Text> key is: LOADING </Text>
  //   </View>
  // );
}

export function testExample() {
  const temp = LoadServerData();
  console.log('Test Success??: ' + temp[0]);

  if (Number.isFinite(temp[0])) {
    return (
      <View style={styles.container}>
        <Text>Swivel Maps2</Text>
        <Text> Latitude is: {temp[0]} </Text>
        <Text> Longitude is: {temp[1]} </Text>
      </View>
    );
  } else {
    return temp;
  }
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
