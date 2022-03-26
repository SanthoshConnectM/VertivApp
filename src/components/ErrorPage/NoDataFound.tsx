import React from 'react';
import {Text, View, Image} from 'react-native';
import { IconButton } from 'react-native-paper';

const NoDataFound = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <IconButton
        icon="gauge-empty"
        color="black"
        size={35}
      />
      <Text
        style={{fontSize: 15, color: 'black', fontFamily: 'Nunito-Regular'}}>
        No data found....
      </Text>
    </View>
  );
};

export default NoDataFound;
