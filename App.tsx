import React from 'react';
import { View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import PassCodePage from './src/components/PasscodePage/PassCodePage';
import NoInternetAvailable from './src/components/ErrorPage/NoInternetAvailable';
import { firebase } from './src/configuration/config';
import {connect} from 'react-redux';
import {getFirebaseData} from './src/actions/index';
import HomePage from './src/components/HomePage/HomePage';
import PushNotification,{Importance} from 'react-native-push-notification';

interface AppProps {
}

interface AppState {
  connectedToInternet: any,
  passcodeIsChecked: any
  firebaseData:any
}


class App extends React.Component<AppProps, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      connectedToInternet: true,
      passcodeIsChecked: false,
      firebaseData:{}
    }
  }

  componentDidMount() {
    firebase.database()
      .ref('Vertiv')
      .once('value')
      .then(snapshot => {
        this.setState({firebaseData: snapshot.val()})
      });
    NetInfo.addEventListener(state => {
      this.setState({ connectedToInternet: state.isConnected })
    })
    this.createChannel()
  }

  static getDerivedStateFromProps(props:any,state:any){
    console.log("getDerivedddddPropssssssssssss",props)
    return state;
  }

  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }


  render() {
    return (
      <View>

          {
            this.state.connectedToInternet ? <HomePage/> : <NoInternetAvailable />
          }
      </View>
    );
  }
}

// const mapStateToProps = (state:any) => {
//   return state;
// }

// const mapDispatchToProps = (dispatch:any) => {
//     return{
//       receiveFirebaseData : (fbData:any) => {
//         dispatch(getFirebaseData(fbData))
//       }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App