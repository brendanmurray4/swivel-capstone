import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { headerFooterStyles } from '../Header_Footer/HeaderFooter';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={profileStyles.container}>
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
          <View style={profileStyles.top}>
            <Image
              style={{ resizeMode: 'cover', height: '100%', width: '50%', borderRadius: 200, alignSelf: 'center' }}
              source={require('../../../assets/swivel_bike.png')}
            />
          </View>

          <View style={profileStyles.lowerTop}>
            <Text style={profileStyles.topText}> John Smith </Text>
          </View>

          <View style={profileStyles.middle}>
            <View style={profileStyles.horizontalView}>
              <View style={profileStyles.middleLeft}>
                <Image
                  style={{ resizeMode: 'cover', height: '100%', width: '30%' }}
                  source={require('../../../assets/clock_icon.jpg')}
                />
              </View>
              <View style={profileStyles.middleRight}>
                <TouchableOpacity
                  style={profileStyles.baseButton}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <View style={profileStyles.baseButton}>
                    <Text style={profileStyles.baseButtonText}> Profile </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={profileStyles.horizontalView}>
              <View style={profileStyles.middleLeft}>
                <Image
                  style={{ resizeMode: 'cover', height: '100%', width: '30%' }}
                  source={require('../../../assets/clock_icon.jpg')}
                />
              </View>
              <View style={profileStyles.middleRight}>
                <TouchableOpacity
                  style={profileStyles.baseButton}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <View style={profileStyles.baseButton}>
                    <Text style={profileStyles.baseButtonText}> Notifications </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={profileStyles.horizontalView}>
              <View style={profileStyles.middleLeft}>
                <Image
                  style={{ resizeMode: 'cover', height: '100%', width: '30%' }}
                  source={require('../../../assets/clock_icon.jpg')}
                />
              </View>
              <View style={profileStyles.middleRight}>
                <TouchableOpacity
                  style={profileStyles.baseButton}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <View style={profileStyles.baseButton}>
                    <Text style={profileStyles.baseButtonText}> Settings </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={profileStyles.horizontalView}>
              <View style={profileStyles.middleLeft}>
                <Image
                  style={{ resizeMode: 'cover', height: '100%', width: '30%' }}
                  source={require('../../../assets/clock_icon.jpg')}
                />
              </View>
              <View style={profileStyles.middleRight}>
                <TouchableOpacity
                  style={profileStyles.baseButton}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <View style={profileStyles.baseButton}>
                    <Text style={profileStyles.baseButtonText}> Support </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={profileStyles.horizontalView}>
              <View style={profileStyles.middleLeft}>
                <Image
                  style={{ resizeMode: 'cover', height: '100%', width: '30%' }}
                  source={require('../../../assets/clock_icon.jpg')}
                />
              </View>
              <View style={profileStyles.middleRight}>
                <TouchableOpacity
                  style={profileStyles.baseButton}
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <View style={profileStyles.baseButton}>
                    <Text style={profileStyles.baseButtonText}> Logout </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 1,
  },
  lowerTop: {
    flex: 0.1,
    backgroundColor: 'pink',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 0.6,
    backgroundColor: 'yellow',
    borderWidth: 1,
  },
  // bottom: {
  //   flex: 0.15,
  //   backgroundColor: 'red',
  //   borderWidth: 1,
  // },

  topText: {
    fontWeight: 'bold',
    color: '#af9',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
    bottom: '10%',
  },

  horizontalView: {
    flex: 1,
    backgroundColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  middleLeft: {
    flex: 0.3,
    backgroundColor: 'purple',
    borderWidth: 1,
    alignItems: 'center',
  },
  middleRight: {
    flex: 0.7,
    backgroundColor: 'teal',
    borderWidth: 1,
    justifyContent: 'center',
  },

  middleText: {
    fontWeight: 'bold',
    color: '#af9',
    fontSize: 22,
    textAlign: 'left',
  },
  baseButton: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  baseButtonText: {
    fontWeight: 'bold',
    color: '#BFC0BD',
    fontSize: 26,
    textAlign: 'left',
  },
});

export default ProfileScreen;
