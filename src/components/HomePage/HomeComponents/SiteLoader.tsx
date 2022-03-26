import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native';

class SiteLoader extends React.Component {
  constructor(props: any) {
    super(props);
  }
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
            source={require('./../../../assets/site_loader.json')}
            autoPlay
            loop={true}
            speed={1}
          />
        </View>
        <Text style={{textAlign:"center",fontFamily: 'Nunito-Regular',fontSize:17,color:"black"}}>fetching site details....</Text>
      </View>
    );
  }
}

export default SiteLoader;
