import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Function returns [latitude, longitude], two variables based on destination address
export function gethttp() {
  const [isLoading, setLoading] = useState(true);
  var [latitude, setLatitude] = useState(null);
  var [longitude, setLongitude] = useState(null);
  // const [data, setData] = useState(null);

  const getDataFromServer = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3030');
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
