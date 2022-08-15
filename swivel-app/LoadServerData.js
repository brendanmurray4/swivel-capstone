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
  const [data, setData] = useState({});

  const getDataFromServer = async () => {
    console.log('GetDataFromserver loaded');
    try {
      const response = await fetch('https://iot.swivel.bike/status/ping');
      const json = await response.json();
      setData(json); // replace with .latitude
      // setLongitude(json.data.message); // replace with .longitude
      console.log('\n0.1Received from server1: ' + json);
      console.log('0.2Received from server2: ' + json.data);
      console.log('0.3Received from server3: ' + json.data.message);
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

  if (isLoading || (data.data == undefined || data.data == null)) {
    return (
      <View style={styles.container}>
        <Text>Swivel Map Loading</Text>
        <Text> key is: LOADING </Text>
      </View>
    );
  } else if(data.data != undefined && data.data != null) {
    console.log("2. Should occur after 1");
    console.log('\n\n~Received from server1: ' + data);
    console.log('\n\n~Received from server2: ' + data.data);
    console.log('\n\n~Received from server3: ' + data.data.message);
    return (
      <View style={styles.container}>
        <Text>Swivel Maps2</Text>
        <Text> key is: {data.data.message} </Text>
      </View>
    ); 
  }


}

function test_output(dataObj) {
  console.log('\nReturning data: ' + dataObj);
  var key = dataObj.data[0];
  var latitude = dataObj.data[1];
  var longitude = dataObj.data[2];
  var acceleration = dataObj.data[3];

  console.log('Key: ' + dataObj.data[0]);
  console.log('Latitude: ' + latitude);
  console.log('Longitude: ' + longitude);
  console.log('Acceleration: ' + acceleration);
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
