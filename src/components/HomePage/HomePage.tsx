import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, Button, ScrollView } from 'react-native';
import PushNotification,{Importance} from 'react-native-push-notification';
import SearchBar from './HomeComponents/SearchBar';
import Dashboard from './HomeComponents/Dashboard';
import Sandwich from './HomeComponents/Sandwich';
import SiteItem from './HomeComponents/SiteItem';


export default class HomePage extends React.Component {

  // handleNotification = () => {
  //   console.log("Clickeddd")
  //   PushNotification.localNotification({
  //     channelId: "channel-id", 
  //       title:"Site Alert",
  //       message:"BDC6E-1 site is down at Divyashree Tech Park 1"
  //   })
  // }


  render() {
    return (
      <View style={{margin:7}}>
        <SearchBar/>
        <ScrollView>
          <Dashboard/>
          <Sandwich/>
          <SiteItem/>
         </ScrollView>
        {/* <Button title='Get Notification' onPress={this.handleNotification}/> */}
      </View>
    )
  }
}