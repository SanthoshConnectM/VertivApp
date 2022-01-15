import React from 'react';
import { Text, View,Image } from 'react-native';

const FirebaseAuthIssue = () => {
    return (
        <View style={{
            marginTop: 200,
            alignItems: 'center',
            justifyContent: 'center',
            padding:10,
        }}>
            <Image source={require("../../assets/fb_issue.png")} style={{width:50,height:50}}/>
            <Text style={{ fontSize: 15, color: "black" }}>Firebase error</Text>
            <Text style={{ fontSize: 15, color: "black" }}>Firebase configuration must be expired or changed</Text>
        </View>
    );
}

export default FirebaseAuthIssue;