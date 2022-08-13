import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function gethttp() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getDataFromServer = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies); // From the JSON file we use the "movies header"
      setData2(json.description); // From the JSON file we use the "description header"
      console.log(JSON.stringify(json.description));
      console.log("Organizations is");
    } catch (error) { // Prints error if one occurs
      console.error(error);
    } finally { // We are no longer loading, the json file ahs loaded
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <View style={{ flex: 1, padding: 32 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => ( // Renders item into a list
            <Text>
              {item.title}, {item.releaseYear}, {data2}
            </Text>
          )}
        />
      )}
    </View>
  );
}
