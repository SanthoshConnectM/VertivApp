import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';
import SearchBar from './HomeComponents/SearchBar';
import Dashboard from './HomeComponents/Dashboard';
import Sandwich from './HomeComponents/Sandwich';
import SiteItem from './HomeComponents/SiteItem';
import { connect } from 'react-redux';
import { getSiteDetails } from '../../actions';
import NetworkErrorPage from '../ErrorPage/NetworkErrorPage';
import { siteDataIsLoading } from './../../actions/index';

class HomePage extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showMainContent: false,
      refreshing: false,
      siteCredentials: {
        siteURL: "",
        siteAuth: ""
      },
      networkIssue: false,
      isSiteLoading: true
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

  static getDerivedStateFromProps(props: any, state: any) {
    state.siteCredentials.siteURL = props.data.firebaseData.site_url
    state.siteCredentials.siteAuth = props.data.firebaseData.site_auth
    state.isSiteLoading = props.data.siteDataRendered
    state.networkIssue = props.data.siteDataFetchFailed
    return state;
  }


  componentDidMount() {
    this.props.getSiteData(this.state.siteCredentials);
  }

  onRefresh() {
    this.props.getSiteData(this.state.siteCredentials);
  }



  render() {
    if (!this.state.networkIssue) {
      return (
        <View style={{ margin: 10 }}>
          {!this.state.isSiteLoading && <SearchBar />}
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh()} />
            }>
            {!this.state.isSiteLoading && <Dashboard />}
            {!this.state.isSiteLoading && <Sandwich />}
            <SiteItem />
          </ScrollView>
        </View>
      );
    } else {
      return <NetworkErrorPage />;
    }
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSiteData: (reqPayload: any) => {
      dispatch(getSiteDetails(reqPayload));
    },
    getSiteDataLoading: (reqPayload: any) => {
      dispatch(siteDataIsLoading(reqPayload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
