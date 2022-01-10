import React from 'react';
import { Text, View,Image } from 'react-native';

const NoInternetAvailable = () => {
    return (
        <View style={{
            marginTop: 200,
            alignItems: 'center',
            justifyContent: 'center',
            padding:10,
        }}>
            <Image source={require("../../assets/no_wifi.png")} style={{width:50,height:50}}/>
            <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular' }}>No Internet available</Text>
            <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular' }}>Turn on mobile data or connect to wifi</Text>
        </View>
    );
}

export default NoInternetAvailable;