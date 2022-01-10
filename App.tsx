import React from 'react';
import { View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import PassCodePage from './src/components/PasscodePage/PassCodePage';
import NoInternetAvailable from './src/components/ErrorPage/NoInternetAvailable';
import { firebase } from './src/configuration/config';

interface AppProps {
}

interface AppState {
  connectedToInternet: any,
  passcodeIsChecked: any
}


class App extends React.Component<AppProps, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      connectedToInternet: true,
      passcodeIsChecked: false,
    }
  }

  componentDidMount() {
    firebase.database()
    .ref('Vertiv')
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });
    NetInfo.addEventListener(state => {
      this.setState({ connectedToInternet: state.isConnected })
    })
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
export default App;
