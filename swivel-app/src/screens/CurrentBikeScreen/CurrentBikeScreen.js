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
  Alert,
} from 'react-native';

import { headerFooterStyles, generateHeader, generateFooter } from '../Header_Footer/HeaderFooter';

const CurrentBikeScreen = () => {
  const navigation = useNavigation();
  const [telemetry, setTelemetry] = React.useState(undefined);
  const [tasks, setTasks] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      fetch('http://iot.swivel.bike/telemetry/1')
        // .then((resp) => resp.json()) // PLEASE UNCOMMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .then((resp) => {
          setTelemetry(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });

      fetch('http://iot.swivel.bike/control/1')
        // .then((resp) => resp.json()) // PLEASE UNCOMMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .then((resp) => {
          setTasks(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => {
      window.clearInterval(updateInterval);
    };
  }, []);

  const addTask = (task) => {
    setIsLoading(true);
    fetch('http://iot.swivel.bike/control/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actions: [task],
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setTasks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeTask = (task) => {
    fetch('http://iot.swivel.bike/control/complete/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actions: [task],
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setTasks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFriendlyNetworkStatus = () => {
    if (!telemetry) {
      return 'Unknown';
    }
    const { grps } = telemetry;
    const { network_status } = grps;
    if (network_status === 0 || network_status === 2) {
      return 'Searching (Operator)';
    } else if (network_status === 1) {
      return 'Registered (Home)';
    } else if (network_status === 3) {
      return 'Registration Denied';
    } else if (network_status === 5) {
      return 'Registered (Roaming)';
    }
    return 'Unknown';
  };

  const isUnlockable = () => {
    if (isLoading) {
      return false;
    }
    if (!telemetry) {
      return false;
    }
    if (!tasks) {
      return false;
    }
    if (tasks && tasks.includes('UNLOCK')) {
      return false;
    }
    return true;
  };

  return (
    <View style={currentBikeStyles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/swivel_login_background.jpg')}
      >
        <View style={headerFooterStyles.header}>{generateHeader()}</View>

        <View style={headerFooterStyles.body}>
          <View style={currentBikeStyles.top}>
            <Image
              style={{ resizeMode: 'cover', height: '100%', width: '100%' }}
              source={require('../../../assets/bikeSelection/bike4.jpg')}
            />
          </View>

          <View style={currentBikeStyles.topText}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 26,
                flex: 1,
              }}
            >
              Emonda SLR
            </Text>
          </View>

          <View style={currentBikeStyles.middle}>
            <View style={currentBikeStyles.textBoxColumn}>
              <Text style={currentBikeStyles.greyText}> Rental Time </Text>
              <Text style={currentBikeStyles.greyText}> Battery Life </Text>
              <Text style={currentBikeStyles.greyText}> Location </Text>
              <Text style={currentBikeStyles.greyText}> Delegator </Text>
            </View>
            <View style={currentBikeStyles.textBoxColumn}>
              <Text style={currentBikeStyles.defaultText}> 52 minutes left </Text>
              <Text style={currentBikeStyles.defaultText}> 38% </Text>
              <Text style={currentBikeStyles.defaultText}> Seymour Drive </Text>
              <Text style={currentBikeStyles.defaultText}> Locked </Text>
            </View>
          </View>

          <View style={currentBikeStyles.bottom}>
            <TouchableOpacity
              style={
                isUnlockable()
                  ? currentBikeStyles.unlockButton
                  : currentBikeStyles.unlockButtonDisabled
              }
              onPress={() => {
                if (isUnlockable()) {
                  addTask('UNLOCK');
                } else {
                  Alert.alert(
                    'Reset Delegator State?',
                    'Would you like to reset the list of tasks for the delegator?',
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: () => {
                          removeTask('UNLOCK');
                        },
                      },
                    ]
                  );
                }
              }}
            >
              <Text style={currentBikeStyles.buttonUnlockDelegatorText}>Unlock Bike</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={headerFooterStyles.footer}>{generateFooter()}</View>
      </ImageBackground>
    </View>
  );
};

const currentBikeStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#eff',
  },
  //Image
  top: {
    flex: 0.4,
    backgroundColor: '#dff',
  },
  topText: {
    flex: 0.08,
    backgroundColor: '#Fff',
  },
  // Text
  middle: {
    flex: 0.42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  // Button
  bottom: {
    flex: 0.1,
    backgroundColor: '#eff',
  },

  defaultText: {
    flex: 1,
    borderWidth: 1,
    // flexGrow: 1,
    // // paddingVertical: 10,

    // alignContent: 'center',
    backgroundColor: 'white',
    // fontWeight: 'bold',
    // color: '#000',
    // fontSize: 16,
    // paddingVertical: '3%',
    // paddingHorizontal: '15%',
    alignItems: 'stretch',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textBoxRow: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    // flexGrow: 1,
    // // paddingVertical: 10,

    // alignContent: 'center',

    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    // fontWeight: 'bold',
    // color: '#000',
    // fontSize: 16,
    // paddingVertical: '3%',
    // paddingHorizontal: '15%',
    alignItems: 'stretch',
  },
  textBoxColumn: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    // flexGrow: 1,
    // // paddingVertical: 10,

    // alignContent: 'center',

    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    // fontWeight: 'bold',
    // color: '#000',
    // fontSize: 16,
    // paddingVertical: '3%',
    // paddingHorizontal: '15%',
    alignItems: 'stretch',
  },

  buttonUnlockDelegator: {
    flex: 1,
    justifyContent: 'center',
    top: '0%',
    // borderWidth: 1,
    backgroundColor: '#B4FF39',
  },

  buttonUnlockDelegatorText: {
    fontWeight: 'bold',
    color: '#000',
    // color: '#B4FF39',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: '5%',
    opacity: 1,
    flex: 1,
  },
  greyText: {
    fontWeight: 'bold',
    color: '#BFC0BD',
    fontSize: 22,
    borderWidth: 1,
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  unlockButton: {
    backgroundColor: '#BFC0BD',
    color: '#aaa',
    flex: 1,
  },

  unlockButtonDisabled: {
    backgroundColor: '#B4FF39',
    color: '#000',
    flex: 1,
  },
});
export default CurrentBikeScreen;
