import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Surface, Card, IconButton} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  getActiveRate,
  getHealthySites,
  getFaultySites,
} from '../../../helpers/DashboardHelper';

class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      siteDetails: [],
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.data.siteData.data != undefined) {
      state.siteDetails = props.data.siteData.data;
    }
    return state;
  }

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{marginTop: 5}}>
        <Surface style={{elevation: 5}}>
          <View style={{margin: 0}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 5,
                  justifyContent:"center",
                }}>
                <View style={{flexDirection: 'row',marginLeft:20}}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: 'black',
                      fontFamily: 'Nunito-Regular',
                    }}>
                    {getActiveRate(this.state.siteDetails)}
                  </Text>
                  <IconButton
                    icon="percent-outline"
                    color="black"
                    size={25}
                    style={{marginTop: 15, marginLeft: -6}}
                  />
                </View>
                <View style={{flexDirection: 'row',marginLeft:25}}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: 'black',
                      fontFamily: 'Nunito-Regular',
                    }}>
                    {getHealthySites(this.state.siteDetails)}
                  </Text>
                  <IconButton
                    icon="arrow-up"
                    color="green"
                    size={25}
                    style={{marginTop: 15, marginLeft: -6}}
                  />
                </View>
                <View style={{flexDirection: 'row',marginLeft:25}}>
                  <Text
                    style={{
                      fontSize: 40,
                      color: 'black',
                      fontFamily: 'Nunito-Regular',
                    }}>
                    {getFaultySites(this.state.siteDetails)}
                  </Text>
                  <IconButton
                    icon="arrow-down"
                    color="red"
                    size={25}
                    style={{marginTop: 15, marginLeft: -6}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              marginTop:-5,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontFamily: 'Nunito-Regular',
              }}>
              Active
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontFamily: 'Nunito-Regular',
              }}>
              Healthy
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontFamily: 'Nunito-Regular',
              }}>
              Faulty
            </Text>
          </View>
        </Surface>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, null)(Dashboard);
