// How to get data from HTTP?
// 4 Objects are obtained in an array format
// {ID, latitude, longitude, acceleration}
// will be returned as an array
// array[0] = ID, array[1] = latitude...

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Function returns [latitude, longitude], two variables based on destination address
export function gethttp() {
  const [isLoading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  const getDataFromServer = async () => {
    try {
      const response = await fetch('https://iot.swivel.bike/telemetry/1');
      const json = await response.json();
      setData(json); // replace with .latitude
      // setLongitude(json.data.message); // replace with .longitude
      console.log("\n\nReceived from server" + json);
      
    } catch (error) {
      // Prints error if one occurs
      console.error(error);
    } finally {
      // We are no longer loading, the json file has loaded
      setLoading(false);
    }
  };

  useEffect(() => {
    // This means that
    getDataFromServer();
  }, []);

  // const temp = data.at(2)
  if(isLoading == false) {
    test_output(data);
    return data.data;
  }
}


function test_output(dataObj)
{
  console.log("\nReturning data: " + dataObj)
  var key = dataObj.data[0];
  var latitude = dataObj.data[1];
  var longitude = dataObj.data[2];
  var acceleration = dataObj.data[3];

  console.log("Key: " + dataObj.data[0]);
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
  console.log("Acceleration: " + acceleration);
}

