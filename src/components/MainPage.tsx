import React from 'react';
import { View, Button, Text } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import NoInternetAvailable from './ErrorPage/NoInternetAvailable';
import { firebase } from '../configuration/config';
import FirebaseAuthIssue from './ErrorPage/FirebaseAuthIssue';
import NoAccessPage from './ErrorPage/NoAccessPage';
import PassCodePage from './PasscodePage/PassCodePage';
import { connect } from 'react-redux';
import { getFirebaseData,firebaseDataReceived,getFirebaseDataErr } from '../actions/index';
import HomePage from './HomePage/HomePage';


class MainPage extends React.PureComponent<any, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      firebaseData: {},
      connectedToInternet: true,
      hasUserLoggedIn:true
    }
  }

  static getDerivedStateFromProps(props:any,state:any){
    return state;
}


  componentDidMount() {
    try {
      firebase.database()
        .ref('Vertiv')
        .once('value')
        .then(snapshot => {
          if(snapshot.val() === null || snapshot.val() === undefined){
            this.props.getFirebaseDataErr(true)
          }else{
            this.props.getDataFromStore(snapshot.val())
          }
        });
    } catch (err) {
      this.props.getFirebaseDataErr(true)
    }
    NetInfo.addEventListener(state => {
      this.setState({ connectedToInternet: state.isConnected })
    })
  }


  render() {
    return (
      <View>     
        {
          !this.state.connectedToInternet ? <NoInternetAvailable /> : (  this.state.hasUserLoggedIn ? <HomePage /> : <PassCodePage/>)
        }
      </View>
    )
  }
}
const mapStateToProps = (state: any) => {
  return state;
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getDataFromStore: (message:any) => {
      dispatch(getFirebaseData(message))
    },
    getFirebaseDataErr : (message:any) => {
      dispatch(getFirebaseDataErr(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);