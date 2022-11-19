import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  ImageStore,
} from 'react-native';

import { headerFooterStyles } from '../Header_Footer/HeaderFooter';

const defaultHeight = 125;
const defaultWidth = 125;

const BikeSelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={bikeSelectionStyles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/swivel_login_background.jpg')}
      >
        <View style={headerFooterStyles.header}>
          <TouchableOpacity
            style={headerFooterStyles.headerButtonSwivel}
            onPress={() => navigation.navigate('Map')}
          >
            <Image
              style={{ resizeMode: 'contain', height: '60%', width: '60%' }}
              source={require('../../../assets/swivel_logo.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={headerFooterStyles.headerButtonUser}
            onPress={() => navigation.navigate('Profile')}
          >
            <Image
              style={{ resizeMode: 'contain', height: '60%', width: '50%' }}
              source={require('../../../assets/user_icon.jpg')}
            />
          </TouchableOpacity>
        </View>

        <View style={headerFooterStyles.body}>
          <View style={bikeSelectionStyles.top}>
            <ScrollView style={bikeSelectionStyles.scrollView}>
              {bikeGeneration()}
            </ScrollView>
          </View>
        </View>

        <View style={headerFooterStyles.footer}>
          <TouchableOpacity
            style={headerFooterStyles.footerButtonBike}
            onPress={() => navigation.navigate('MapScreen')}
          >
            <Image
              style={{ resizeMode: 'contain', height: '60%', width: '50%' }}
              source={require('../../../assets/footer_bike_highlighted.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={headerFooterStyles.footerButtonGarage}
            onPress={() => navigation.navigate('MapScreen')}
          >
            <Image
              style={{ resizeMode: 'contain', height: '60%', width: '50%' }}
              source={require('../../../assets/footer_garage.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

function bikeGeneration() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const bikeData1 = [
    {
      bikeName: 'Townie Original 7D',
      location: 'Burrard St, Vancouver, BC, Canada',
      rating: '4.7/5',
      battery: '77',
      time: '5d 2h',
      image: require('../../../assets/bikeSelection/bike1.jpg'),
    },
  ];
  const bikeData2 = [
    {
      bikeName: 'Domane+ ALR',
      location: 'Westridge, Burnaby, BC, Canada',
      rating: '4.1/5',
      battery: '47',
      time: '3d 5h',
      image: require('../../../assets/bikeSelection/bike2.jpg'),
    },
  ];
  const bikeData3 = [
    {
      bikeName: 'Boone 6',
      location: 'Nelson St, Vancouver, BC, Canada',
      rating: '4.9/5',
      battery: '63',
      time: '4d 5h',
      image: require('../../../assets/bikeSelection/bike3.jpg'),
    },
  ];
  const bikeData4 = [
    {
      bikeName: 'Checkpoint ALR 5 Driftless',
      location: 'Science Rd, Burnaby, BC, Canada',
      rating: '3.7/5',
      battery: '30',
      time: '2d 1h',
      image: require('../../../assets/bikeSelection/bike4.jpg'),
    },
  ];
  const bikeData5 = [
    {
      bikeName: 'Emonda SLR 9 eTap',
      location: '52a St, Delta, BC, Canada',
      rating: '4.2/5',
      battery: '96',
      time: '6d 9h',
      image: require('../../../assets/bikeSelection/bike5.png'),
    },
  ];
  const masterArray = [bikeData1, bikeData2, bikeData3, bikeData4, bikeData5];
  var numBikes = masterArray.length;

  const views = [];
  for (let i = 0; i < numBikes; i++) {
    views.push(
      <View style={bikeSelectionStyles.bikeBox}>
        <Image
          style={bikeSelectionStyles.bikeImage}
          source={masterArray[i].map(({ image }) => image).toString()}
        />
        <View style={bikeSelectionStyles.bikeTextBox}>
          <View style={bikeSelectionStyles.bikeTextBoxInnerTop}>
            <Text style={bikeSelectionStyles.bikeTextTop}>
              {masterArray[i].map(({ bikeName }) => bikeName)}
            </Text>
            <Text style={bikeSelectionStyles.bikeTextMiddle}>
              {masterArray[i].map(({ location }) => location).toString()}
            </Text>
          </View>

          <View style={bikeSelectionStyles.bikeTextBoxInnerBottom}>
            <Image
              style={bikeSelectionStyles.bikeInnerImage}
              source={require('../../../assets/star.png')}
            />
            <Text style={bikeSelectionStyles.bikeTextBottom}>
              {masterArray[i].map(({ rating }) => rating)}
            </Text>
            <Image
              style={bikeSelectionStyles.bikeInnerImage}
              source={require('../../../assets/refresh.png')}
            />
            <Text style={bikeSelectionStyles.bikeTextBottom}>
              {masterArray[i].map(({ battery }) => battery)}
            </Text>
            <Image
              style={bikeSelectionStyles.bikeInnerImage}
              source={require('../../../assets/battery.png')}
            />
            <Text style={bikeSelectionStyles.bikeTextBottom}>
              {masterArray[i].map(({ time }) => time)}
            </Text>
          </View>

          <View style={bikeSelectionStyles.bottomButtonInner}>
            <TouchableOpacity
              style={bikeSelectionStyles.button}
              onPress={() => navigation.navigate('Purchase')}
            >
              <View style={bikeSelectionStyles.button2}>
                <Text style={bikeSelectionStyles.buttonText}> Rent Bike </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return views;
}

const bikeSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 0,
  },
  top: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
  },
  // bottom: {
  //   flex: 0.2,
  //   backgroundColor: 'grey',
  //   borderWidth: 1,
  // },

  bikeBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#2a4944',
    backgroundColor: 'white',
    borderWidth: 0.5,
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    // paddingTop: 50,
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
    paddingBottom: '4%',
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
    backgroundColor: 'white',
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
  button: {
    flex: 1,
    backgroundColor: '#B4FF39',
    color: '#000',
    justifyContent: 'center',
    top: '0%',
    // bottom: '10%',
    // borderWidth: 1,
    // marginBottom: '5%',
    marginRight: '5%',
    borderRadius: 10,
  },
  button2: {
    flex: 1,
    backgroundColor: '#B4FF39',
    color: '#000',
    justifyContent: 'center',
    top: '0%',
    // bottom: '10%',
    borderWidth: 1,
    // marginBottom: '5%',
    // marginRight: '5%',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#300000',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },

});
export default BikeSelectionScreen;
