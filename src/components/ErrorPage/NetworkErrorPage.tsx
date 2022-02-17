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
      <Text style={{fontSize: 15, color: 'black',fontFamily: 'Nunito-Regular'}}>Network Error</Text>
      <Text style={{fontSize: 15, color: 'black',fontFamily: 'Nunito-Regular'}}>
        Unable to get response from server.
      </Text>
    </View>
  );
};

export default NetworkErrorPage;
