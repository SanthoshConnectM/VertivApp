import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, Button, ScrollView } from 'react-native';
import PushNotification,{Importance} from 'react-native-push-notification';
import SearchBar from './HomeComponents/SearchBar';
import Dashboard from './HomeComponents/Dashboard';
import Sandwich from './HomeComponents/Sandwich';
import SiteItem from './HomeComponents/SiteItem';
import { connect } from 'react-redux';
import { getSiteDetails } from '../../actions';


class HomePage extends React.PureComponent<any,any> {

  constructor(props:any){
    super(props);

  }

  // handleNotification = () => {
  //   console.log("Clickeddd")
  //   PushNotification.localNotification({
  //     channelId: "channel-id", 
  //       title:"Site Alert",
  //       message:"BDC6E-1 site is down at Divyashree Tech Park 1"
  //   })
  // }

  componentDidMount(){
    console.log("ComponentDidMountCaLLED")
    this.props.getSiteData()
  }


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

const mapStateToProps = (state:any) =>{
  return state
}

const mapDispatchToProps = (dispatch:any) => {
  return{
    getSiteData: () => {
      dispatch(getSiteDetails())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)