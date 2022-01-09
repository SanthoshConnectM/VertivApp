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
            <Image source={require("/home/santhosh/Desktop/Santhosh/ReactNative/VertivApp/assets/no_wifi.png")} style={{width:50,height:50}}/>
            <Text style={{ fontSize: 15, color: "black" }}>No Internet available</Text>
            <Text style={{ fontSize: 15, color: "black" }}>Turn on mobile data or connect to wifi</Text>
        </View>
    );
}

export default NoInternetAvailable;