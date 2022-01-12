import React from 'react';
import { View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import PassCodePage from './src/components/PasscodePage/PassCodePage';
import NoInternetAvailable from './src/components/ErrorPage/NoInternetAvailable';
import { firebase } from './src/configuration/config';
import {connect} from 'react-redux';
import {getFirebaseData} from './src/actions/index';

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
  }

  static getDerivedStateFromProps(props:any,state:any){
    console.log("getDerivedddddPropssssssssssss",props)
    return state;
  }


  render() {
    return (
      <View>

          {
            this.state.connectedToInternet ? <PassCodePage /> : <NoInternetAvailable />
          }
      </View>
    );
  }
}

const mapStateToProps = (state:any) => {
  return state;
}

const mapDispatchToProps = (dispatch:any) => {
    return{
      receiveFirebaseData : (fbData:any) => {
        dispatch(getFirebaseData(fbData))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
