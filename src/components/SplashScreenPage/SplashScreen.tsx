import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

class SplashScreen extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <View
          style={{
            marginTop: '50%',
            width: '100%',
            height: 150,
            justifyContent: 'center',
          }}>
          <LottieView
            source={require('./../../assets/logo_animation.json')}
            autoPlay
            loop={false}
            speed={0.5}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ width: '40%', height: 70, justifyContent: 'center' }}>
            <LottieView
              source={require('./../../assets/text_animation.json')}
              autoPlay
              loop={false}
              speed={0.2}
            />
          </View>
          <Text style={{
            justifyContent: "center", fontSize: 15,
            color: 'black',
            fontFamily: 'Nunito-Regular',
          }}>0.0.2</Text>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
