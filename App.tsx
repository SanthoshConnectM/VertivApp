import React from 'react';
import {View} from 'react-native';
import PassCodePage from './components/PasscodePage/PassCodePage';
import NetInfo from "@react-native-community/netinfo";
import NoInternetAvailable from './components/ErrorPage/NoInternetAvailable';

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
      connectedToInternet:true,
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
