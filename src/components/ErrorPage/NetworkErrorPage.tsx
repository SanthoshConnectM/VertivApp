import React from 'react';
import {Text, View, Image} from 'react-native';
import { IconButton } from 'react-native-paper';

const NetworkErrorPage = () => {
  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>

      <IconButton icon="alert" color="black" size={35} />
      <Text style={{fontSize: 15, color: 'black'}}>Network Error</Text>
      <Text style={{fontSize: 15, color: 'black'}}>
        Unable to get proper response for the server.
      </Text>
    </View>
  );
};

export default NetworkErrorPage;
