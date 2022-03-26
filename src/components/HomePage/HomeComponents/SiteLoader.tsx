import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import {setSiteDataRendering} from "./../../../actions/index";

class SiteLoader extends React.PureComponent<any,any> {
  constructor(props: any) {
    super(props);
  }


  componentDidMount(){
    this.props.siteDataRenderingTrue()
  }
  componentWillUnmount(){
    this.props.siteDataRenderingFalse()
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

const mapStateToProps = (state: any) => {
  return state;
};
const mapDispatchToProps = (dispatch:any) => {
  return{
    siteDataRenderingTrue : () => {
      dispatch(setSiteDataRendering(true))
    },
    siteDataRenderingFalse : () => {
      dispatch(setSiteDataRendering(false))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SiteLoader);
