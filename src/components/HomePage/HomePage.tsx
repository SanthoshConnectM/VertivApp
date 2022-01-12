import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { homeStyleSheet } from './HomePageStyle'
import { View, Text, Button } from 'react-native';
import PushNotification,{Importance} from 'react-native-push-notification';


export default class HomePage extends React.Component {

  handleNotification = () => {
    console.log("Clickeddd")
    PushNotification.localNotification({
      channelId: "channel-id", 
        title:"VertivApp - iAlert",
        message:"BDC6E-1 site is down at Divyashree Tech Park 1"
    })
  }


  render() {
    return (
      <View style={{marginTop:100}}>
        <Button title='Get Notification' onPress={this.handleNotification}/>
      </View>
    )
  }
}