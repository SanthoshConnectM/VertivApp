import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';


class SplashScreen extends React.Component {
    
  render(): React.ReactNode {
    return (
      <View>
        <View style={{marginTop: '50%', width: '100%', height: 150,justifyContent:"center"}}>
          <LottieView
            source={require('./../../assets/logo_animation.json')}
            autoPlay
            loop={false}
          />
          <Text></Text>
        </View>
        <View style={{flexDirection:"row",marginTop: 30,alignItems:"center",justifyContent:"center"}}>
          <Text
            style={{
              fontSize: 35,
              color: 'black',
              letterSpacing: 5,
              fontWeight: 'bold'
            }}>
            VERTIV
          </Text>
          <Text style={{marginTop:-10}}>TM</Text>
          </View>
      </View>
    );
  }
}

export default SplashScreen;
