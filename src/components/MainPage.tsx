import React from 'react';
import { View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import NoInternetAvailable from './ErrorPage/NoInternetAvailable';
import { firebase } from '../configuration/config';
import PassCodePage from './PasscodePage/PassCodePage';
import { connect } from 'react-redux';
import { getFirebaseData,getFirebaseDataErr } from '../actions/index';
import HomePage from './HomePage/HomePage';
import FirebaseAuthIssue from './ErrorPage/FirebaseAuthIssue';

class MainPage extends React.PureComponent<any, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      firebaseData: {},
      connectedToInternet: true,
      hasUserLoggedIn:false,
      firebaseError:false
    }
  }

  static getDerivedStateFromProps(props:any,state:any){
    console.log("FB_Propsssssssss",props.data.firebaseerror)
    state.hasUserLoggedIn = props.data.hasUserLoggedIn
    state.firebaseError = props.data.firebaseerror
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
    if(!this.state.connectedToInternet){
      return(
        <View>
          <NoInternetAvailable />
        </View>
      )
    }else if(this.state.firebaseError){
      return(
        <View>
          <FirebaseAuthIssue/>
        </View>
      )
    }else if(this.state.hasUserLoggedIn){
      return(
        <View>
          <HomePage />
        </View>
      )
    }else{
      return(
        <View>
          <PassCodePage/>
        </View>
      )
    }
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