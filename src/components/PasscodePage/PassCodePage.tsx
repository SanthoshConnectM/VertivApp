import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {userHasLoggedIn} from '../../actions';
import HomePage from '../HomePage/HomePage';
import * as Animatable from 'react-native-animatable';

class PassCodePage extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      ePassCode: '',
      keyrow1: ['1', '2', '3'],
      keyrow2: ['4', '5', '6'],
      keyrow3: ['7', '8', '9'],
      incorrectPasscode: '',
      actualPassCode: '',
      UloggedIn: false,
    };
    this.onKeyPadPress = this.onKeyPadPress.bind(this);
  }

  componentDidUpdate() {
    if (this.state.ePassCode.length === 4) {
      if (this.state.ePassCode == this.state.actualPassCode) {
        if (this.state.UloggedIn === false) {
          setTimeout(() => {
            this.props.userLoggedIn();
            this.setState({UloggedIn: true});
          }, 100);
        }
      } else {
        if (this.state.ePassCode !== this.state.actualPassCode) {
          this.setState({
            incorrectPasscode: 'pincode was incorrect, try again.',
          });
        }
      }
    }
    if (
      this.state.incorrectPasscode == 'pincode was incorrect, try again.' &&
      this.state.ePassCode.length === 4
    ) {
      setTimeout(() => {
        this.setState({ePassCode: ''});
      }, 100);
    }
  }

  onKeyPadPress = (e: any) => {
    let eCode = this.state.ePassCode + e;
    this.setState({ePassCode: eCode});
  };

  static getDerivedStateFromProps(props: any, state: any) {
    state.actualPassCode = props.data.firebaseData.password;
    return state;
  }

  renderPinText() {
    if (this.state.ePassCode.split('').length === 0) {
      return (
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontFamily: 'Nunito-Regular',
            marginTop: 20,
          }}>
          {''}
        </Text>
      );
    } else {
      return this.state.ePassCode.split('').map((item: any, j: any) => (
        <Text
          key={j}
          style={{
            fontSize: 25,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'Nunito-Regular',
            letterSpacing: 50,
            marginTop: 20,
          }}>
          {'*'}
        </Text>
      ));
    }
  }

  render() {
    if (this.state.UloggedIn) {
      return <HomePage />;
    } else {
      return (
        <SafeAreaView>
          <ScrollView>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontFamily: 'Nunito-Regular',
                textAlign: 'center',
                marginTop: '10%',
              }}>
              enter pincode
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {this.renderPinText()}
            </View>
            {/* <Text
              style={{
                fontSize: 15,
                color: 'red',
                fontFamily: 'Nunito-Regular',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {this.state.incorrectPasscode}
            </Text> */}
            <Animatable.Text
            iterationCount="infinite"
            style={{
                fontSize: 15,
                color: 'red',
                fontFamily: 'Nunito-Regular',
                textAlign: 'center',
                marginTop: 10,
              }} animation="shake">{this.state.incorrectPasscode}
            </Animatable.Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                {this.state.keyrow1.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => this.onKeyPadPress(item)}
                      style={styles.roundButton1}>
                      <Text style={{fontSize: 25, color: 'black'}} key={item}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                {this.state.keyrow2.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => this.onKeyPadPress(item)}
                      style={styles.roundButton1}>
                      <Text key={item} style={{fontSize: 25, color: 'black'}}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                {this.state.keyrow3.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => this.onKeyPadPress(item)}
                      style={styles.roundButton1}>
                      <Text key={item} style={{fontSize: 25, color: 'black'}}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity
                  key={'0'}
                  onPress={() => this.onKeyPadPress('0')}
                  style={styles.roundButton1}>
                  <Text style={{fontSize: 25, color: 'black'}}>0</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
const styles = StyleSheet.create({
  input: {
    height: 60,
    marginTop: 20,
    fontSize: 25,
    borderWidth: 1,
    textAlign: 'center',
  },
  roundButton1: {
    width: 80,
    fontFamily: 'Nunito-Regular',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
    backgroundColor: '#DCDCDC',
  },
  roundButton2: {
    width: 80,
    fontFamily: 'Nunito-Regular',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  pincodeText: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLoggedIn: () => {
      dispatch(userHasLoggedIn());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassCodePage);
