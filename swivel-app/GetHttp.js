import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Function returns [latitude, longitude], two variables based on destination address
export function gethttp() {
  const [isLoading, setLoading] = useState(true);
  var [latitude, setLatitude] = useState(null);
  var [longitude, setLongitude] = useState(null);

  const getDataFromServer = async () => {
    try {
      const response = await fetch('https://iot.swivel.bike/status/ping');
      const json = await response.json();
      setLatitude(json.data.message); // replace with .latitude
      setLongitude(json.data.message); // replace with .longitude
      console.log(json);
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

  return [latitude, longitude];
}
