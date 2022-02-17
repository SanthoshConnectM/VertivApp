import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Sandwich extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      siteDetails: [],
      total_sites  : 0
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.data.siteData.data != undefined) {
      state.siteDetails = props.data.siteData.data;
      state.total_sites = props.data.siteData.data.length;
    }
    return state;
  }

  render(): React.ReactNode {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontFamily: 'Nunito-Regular',
              marginTop: 3,
            }}>
            Total sites({this.state.total_sites})
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, null)(Sandwich);
