import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const CheckoutScreen = () => {
  const [cardnumber, setCardnumber] = useState('');
  const [fullName, setFullname] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();
  return (
    <View style={checkoutStyles.container}>
      <View style={checkoutStyles.top}>
        <Image
          style={{ resizeMode: 'contain', height: '100%', width: '80%' }}
          source={require('../../../assets/credit_card2.jpg')}
        />
      </View>
      <View style={checkoutStyles.middle}>
        <TextInput
          style={checkoutStyles.TextInput1}
          placeholder="Card Number"
          placeholderTextColor="#003f5c"
          onChangeText={(cardnumber) => setCardnumber(cardnumber)}
        />

        <TextInput
          style={checkoutStyles.TextInput2}
          placeholder="Card Holder Name"
          placeholderTextColor="#003f5c"
          onChangeText={(fullName) => setFullname(fullName)}
        />

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{
              flex: 1,
              marginLeft: 10,
              height: 50,
              borderColor: '#474343',
              borderWidth: 1,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: 20,
            }}
            placeholder="MM"
            placeholderTextColor="#003f5c"
            onChangeText={(month) => setMonth(month)}
          />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 10,
              marginRight: 10,
              height: 50,
              borderColor: '#474343',
              borderWidth: 1,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: 20,
            }}
            placeholder="YY"
            placeholderTextColor="#003f5c"
            onChangeText={(year) => setYear(year)}
          />
          <TextInput
            style={{
              flex: 1,
              marginRight: 10,
              height: 50,
              borderColor: '#474343',
              borderWidth: 1,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: 20,
            }}
            placeholder="CVV"
            placeholderTextColor="#003f5c"
            onChangeText={(cvv) => setCvv(cvv)}
          />
        </View>
        <Text style={checkoutStyles.totalPrice}>$ 28.55</Text>
      </View>

      <View style={checkoutStyles.bottom}>
        <View style={checkoutStyles.PayButton}>
          <TouchableOpacity
            style={checkoutStyles.PayButton}
            onPress={() => navigation.navigate('Purchase')}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: 26,
                textAlign: 'left',
                // fontWeight: 'bold',
              }}
            >
              {' '}Pay Now{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const checkoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    margin: 0,
  },
  top: {
    flex: 0.55,
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // paddingTop: 40,
    // marginTop: 60,
    // marginHorizontal: 0,
    // marginBottom: 60,
    border: 'none',
  },
  middle: {
    flex: 0.35,
    // borderWidth: 1,
  },

  bottom: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "pink",
    borderWidth: 1,
    marginHorizontal: 15,
    marginBottom: '5%',
    borderRadius: 20,
  },

  PayButton: {
    flex: 1,
    backgroundColor: '#B4FF39',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  TextInput1: {
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 15,
    textAlign: 'center',
    justifyContent: 'flex-end',
    borderColor: '#474343',
    borderRadius: 10,
    borderWidth: 1,
  },

  TextInput2: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
    justifyContent: 'flex-end',
    borderColor: '#474343',
    borderRadius: 10,
    borderWidth: 1,
  },

  totalPrice: {
    fontSize: 36,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    justifyContent: 'flex-end',
    color: '#B4FF39',
    fontWeight: 'bold',
    marginTop: '15%',
  },
});

export default CheckoutScreen;