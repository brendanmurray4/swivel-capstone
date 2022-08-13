import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function gethttp() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [data2, setData2] = useState([]);
  

  const getDataFromServer = async () => {
    try {
      const response = await fetch('https://iot.swivel.bike/status/ping');
      // const response = await fetch('https://iot.swivel.bike/status/ping');
      const json = await response.json();
      setData(json); // From the JSON file we use the "movies header"
      console.log(json)
      // setData2(json.description); // From the JSON file we use the "description header"

    } catch (error) { // Prints error if one occurs
      console.error(error);
    } finally { // We are no longer loading, the json file ahs loaded
      setLoading(false);
    }
  };

  useEffect(() => { // This means that
    getDataFromServer();
  }, []);

  return (
    <View style={{ flex: 1, padding: 32 }}>
            <Text>
              {data && data.data.message}
            </Text>

    </View>
  );
}
