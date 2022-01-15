import React from 'react';
import {Text, View, Image} from 'react-native';
import { IconButton } from 'react-native-paper';

const FirebaseAuthIssue = () => {
  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <IconButton icon="lock" color="black" size={35} />
      <Text style={{fontSize: 15, color: 'black'}}>Firebase error</Text>
      <Text style={{fontSize: 15, color: 'black'}}>
        Firebase configuration must be expired or changed
      </Text>
    </View>
  );
};

export default FirebaseAuthIssue;
