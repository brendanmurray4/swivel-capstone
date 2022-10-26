import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PurchaseScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={purchaseStyles.container}>
      <View style={purchaseStyles.top}>
        <Image
          style={{ resizeMode: 'cover', height: '100%', width: '100%' }}
          source={require('../../../assets/swivel_bike.png')}
        />
      </View>

      <View style={purchaseStyles.middle}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 26 }}>
          {' '}
          Emonda SLR 9 eTap
        </Text>
        <Text style={purchaseStyles.priceText}>
          {' '}
          $ 6.55
          <Text style={{ fontWeight: 'bold', color: '#BFC0BD', fontSize: 14, textAlign: 'center' }}>
            {' '}
            /Hour
          </Text>
        </Text>
      </View>

      <View style={purchaseStyles.middle2}>
        <Image
          style={{
            resizeMode: 'cover',
            height: '76%',
            width: '20%',
            aspectRatio: 0.75,
            left: '4%',
            bottom: '5%',
          }}
          source={require('../../../assets/gps_icon.jpg')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#BFC0BD',
            fontSize: 22,
            textAlign: 'center',
            position: 'absolute',
            left: '20%',
            right: '5%',
            flexShrink: 1,
          }}
        >
          {' '}
          Science Road, Burnaby, BC, Canada{' '}
        </Text>
      </View>
      <View style={purchaseStyles.middle2}>
        <Image
          style={{ resizeMode: 'cover', height: '80%', width: '20%', bottom: '5%' }}
          source={require('../../../assets/clock_icon.jpg')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#BFC0BD',
            fontSize: 22,
            textAlign: 'center',
            position: 'absolute',
            left: '20%',
            right: '5%',
            flexShrink: 1,
            flexWrap: 'wrap',
          }}
        >
          Sept 20th, 8:00 AM to Sept 20th, 11:00 AM{' '}
        </Text>
      </View>

      <View style={purchaseStyles.bottom}>
        <ScrollView>
          <View style={purchaseStyles.bottom_text}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 22,
                textAlign: 'left',
              }}
            >
              {' '}
              Payment Summary
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 22,
                textAlign: 'right',
              }}
            >
              {' '}
              $ 24.01
            </Text>
          </View>
          <View style={purchaseStyles.bottom_text}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 22,
                textAlign: 'left',
              }}
            >
              {' '}
              Hourly Cost
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 22,
                textAlign: 'right',
              }}
            >
              {' '}
              $ 19.65
            </Text>
          </View>
          <View style={purchaseStyles.bottom_text}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 22,
                textAlign: 'left',
              }}
            >
              {' '}
              GST + PST
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#BFC0BD',
                fontSize: 22,
                textAlign: 'right',
              }}
            >
              {' '}
              $ 2.36
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={purchaseStyles.bottom2}>
        <TouchableOpacity
          style={purchaseStyles.confirmButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <View style={purchaseStyles.confirmButton}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#300000',
                fontSize: 26,
                textAlign: 'left',
                // fontWeight: 'bold',
              }}
            >
              {' '}
              Pay Now{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const purchaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    margin: 0,
  },
  top: {
    flex: 0.4,
    backgroundColor: 'grey',
    // borderWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  middle: {
    
    flex: 0.1,
    marginBottom: '2%',
    // backgroundColor: "beige",
    // borderWidth: 1,
  },

  middle2: {
    flex: 0.1, // *2 since there are 2 using this
    // backgroundColor: "beige",
    // borderWidth: 1,
  },
  bottom: {
    flex: 0.2,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: "pink",
    // borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: '3%',
    // marginTop: '10%',
  },
  bottom_text: {
    // flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "pink",
    // borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  bottom2: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "pink",
    // borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  confirmButton: {
    flex: 1,
    backgroundColor: '#B4FF39',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 25,
    // marginBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  baseText: {
    // fontSize: 14,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  priceText: {
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: '#B4FF39',
  },
});
export default PurchaseScreen;
