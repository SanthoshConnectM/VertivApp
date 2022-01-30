import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/reducers/store';
import PushNotification, { Importance } from 'react-native-push-notification';
import MainPage from './src/components/MainPage';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

class App extends React.Component {
  constructor(props: any) {
    super(props);

  }

  // createChannel = () => {
  //   PushNotification.createChannel(
  //     {
  //       channelId: "channel-id",
  //       channelName: "My channel",
  //       channelDescription: "A channel to categorise your notifications",
  //       playSound: true,
  //       soundName: "default",
  //       importance: Importance.HIGH,
  //       vibrate: true,
  //     },
  //     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  //   );
  // }

  // componentDidMount() {
  //   this.createChannel()
  // }

  render() {
    return (
      <View>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </View>
    );
  }
}
export default App