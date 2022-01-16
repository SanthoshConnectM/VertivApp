import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {View, Text, RefreshControl, ScrollView} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import SearchBar from './HomeComponents/SearchBar';
import Dashboard from './HomeComponents/Dashboard';
import Sandwich from './HomeComponents/Sandwich';
import SiteItem from './HomeComponents/SiteItem';
import {connect} from 'react-redux';
import {getSiteDetails} from '../../actions';
import SkeletonLayout from './SkeletonLoader/SkeletonLayout';

class HomePage extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showMainContent: true,
      refreshing:false,
    };
  }

  // handleNotification = () => {
  //   console.log("Clickeddd")
  //   PushNotification.localNotification({
  //     channelId: "channel-id",
  //       title:"Site Alert",
  //       message:"BDC6E-1 site is down at Divyashree Tech Park 1"
  //   })
  // }

  componentDidMount() {
    this.props.getSiteData();
  }

  onRefresh(){
    this.props.getSiteData();
  }



  render() {
    if (this.state.showMainContent) {
      return (
        <View style={{margin: 7}}>
          <SearchBar />
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh()} />
            }>
            <Dashboard />
            <Sandwich />
            <SiteItem />
          </ScrollView>
        </View>
      );
    } else {
      return <SkeletonLayout />;
    }
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSiteData: () => {
      dispatch(getSiteDetails());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
