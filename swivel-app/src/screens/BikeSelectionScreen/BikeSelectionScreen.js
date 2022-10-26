import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const defaultHeight = 125;
const defaultWidth = 125;

const BikeSelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={bikeSelectionStyles.container}>
      <View style={bikeSelectionStyles.top}>
        <ScrollView style={bikeSelectionStyles.scrollView}>
          <View style={bikeSelectionStyles.bikeBox}>
            <Image
              style={bikeSelectionStyles.bikeImage}
              source={require('../../../assets/swivel_bike.png')}
            />
            <View style={bikeSelectionStyles.bikeTextBox}>
              <View style={bikeSelectionStyles.bikeTextBoxInnerTop}>
                <Text style={bikeSelectionStyles.bikeTextTop}> Emonda SLR 9 eTap </Text>
                <Text style={bikeSelectionStyles.bikeTextMiddle}>
                  {' '}
                  Science Rd, Burnaby, BC, Canada{' '}
                </Text>
              </View>

              <View style={bikeSelectionStyles.bikeTextBoxInnerBottom}>
                <Image
                  style={bikeSelectionStyles.bikeInnerImage}
                  source={require('../../../assets/star.png')}
                />
                <Text style={bikeSelectionStyles.bikeTextBottom}>4.7/5</Text>
                <Image
                  style={bikeSelectionStyles.bikeInnerImage}
                  source={require('../../../assets/refresh.png')}
                />
                <Text style={bikeSelectionStyles.bikeTextBottom}>56</Text>
                <Image
                  style={bikeSelectionStyles.bikeInnerImage}
                  source={require('../../../assets/battery.png')}
                />
                <Text style={bikeSelectionStyles.bikeTextBottom}>4d 5h</Text>
              </View>

              <View style={bikeSelectionStyles.bottomButtonInner}>
                <TouchableOpacity
                  style={bikeSelectionStyles.button}
                  onPress={() => navigation.navigate('Purchase')}
                >
                  <View style={bikeSelectionStyles.button}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#300000',
                        fontSize: 22,
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {' '}
                      Rent Bike{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const bikeSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 0,
  },
  top: {
    flex: 0.8,
    backgroundColor: 'grey',
    borderWidth: 1,
  },
  bottom: {
    flex: 0.2,
    backgroundColor: 'grey',
    borderWidth: 1,
  },

  bikeBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#2a4944',
    backgroundColor: 'white',
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 50,
  },

  button: {
    flex: 1,
    backgroundColor: '#B4FF39',
    color: '#000',
    justifyContent: 'center',
    top: '0%',
    bottom: '0%',
    borderWidth: 0.2,
    // borderRadius: 5,
  },

  bikeImage: {
    resizeMode: 'cover',
    height: defaultHeight,
    width: defaultWidth,
    borderRadius: 25,
    marginVertical: '5%',
    marginLeft: '5%',
    marginRight: '3%',
  },

  bikeTextBox: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '6%',
    borderColor: '#7a4944',
    // borderWidth: 1,
    backgroundColor: 'white',
  },

  bikeTextBoxInnerTop: {
    flex: 0.05,
    borderColor: '#7a4944',
    // borderWidth: 1,
    backgroundColor: 'white',
  },
  bikeTextBoxInnerBottom: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // top: '6%',
    borderColor: '#7a4944',
    // borderWidth: 1,
    backgroundColor: 'white',
  },


  bottomButtonInner: {
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    // borderWidth: 1,
  },

  bikeTextTop: {
    flex: 0.05,
    fontSize: 18,
    justifyContent: 'flex-end',
    color: '#000000',
    fontWeight: 'bold',
    // borderWidth: 1,
  },
  bikeTextMiddle: {
    flex: 0.05,
    fontSize: 14,
    justifyContent: 'flex-end',
    color: '#BFC0BD',
    flexShrink: 1,
    fontWeight: 'bold',
  },
  bikeTextBottom: {
    flex: 1,
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: '#000000',
    flexShrink: 1,
    paddingTop: '1%',
    paddingLeft: '2%',
    fontWeight: 'bold',
  },
  bikeInnerImage: {
    resizeMode: 'contain',
    height: '55%',
    width: '10%',
    // bottom: '0%',
  },
});
export default BikeSelectionScreen;
