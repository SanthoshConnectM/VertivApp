import React from 'react';
import { Text, View,Image } from 'react-native';

const NoAccessPage = () => {
    return (
        <View style={{
            marginTop: 200,
            alignItems: 'center',
            justifyContent: 'center',
            padding:10,
        }}>
            <Image source={require("../../assets/no_access.png")} style={{width:50,height:50}}/>
            <Text style={{ fontSize: 15, color: "black" }}>Access failure</Text>
            <Text style={{ fontSize: 15, color: "black" }}>Contact admin to enable the access</Text>
        </View>
    );
}

export default NoAccessPage;