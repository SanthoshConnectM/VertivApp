import React from 'react';
import {View} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import PassCodePage from './src/components/PasscodePage/PassCodePage';
import NoInternetAvailable from './src/components/ErrorPage/NoInternetAvailable';


interface AppProps {

}
interface AppState {
  connectedToInternet:any,
  passcodeIsChecked:any
}


class App extends React.Component<AppProps,AppState>{
  constructor(props:any){
    super(props);
    this.state = {
      connectedToInternet:null,
      passcodeIsChecked:false,
    }
  }

  componentDidMount(){
    NetInfo.addEventListener(state => {
      this.setState({connectedToInternet:state.isConnected})
    })
  }
  

  render(){
    return(
      <View>
         {
           this.state.connectedToInternet ? <PassCodePage/> : <NoInternetAvailable/>
         } 
      </View>
    );
  }
}
export default App;
