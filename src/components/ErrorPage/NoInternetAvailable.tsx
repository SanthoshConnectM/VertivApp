import React from 'react';
import {Text, View, Image} from 'react-native';
import { IconButton } from 'react-native-paper';

const NoInternetAvailable = () => {
  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <IconButton
        icon="wifi-strength-off"
        color="black"
        size={35}
      />
      <Text
        style={{fontSize: 15, color: 'black', fontFamily: 'Nunito-Regular'}}>
        No Internet available
      </Text>
      <Text
        style={{fontSize: 15, color: 'black', fontFamily: 'Nunito-Regular'}}>
        Turn on mobile data or connect to wifi
      </Text>
    </View>
  );
};

export default NoInternetAvailable;
