import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import { Dimensions } from 'react-native';
import { GenerateUUID } from 'react-native-uuid';

const windowWidth = Dimensions.get('window').width;
const windowHeight : any = Dimensions.get('window').height;

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
    };
    this.onKeyPadPress = this.onKeyPadPress.bind(this);
  }

  onKeyPadPress = (e: any) => {
    let eCode = this.state.ePassCode + e;
    this.setState({ePassCode: eCode});
    if (this.state.ePassCode.length === 3) {
      if (this.state.ePassCode === this.state.actualPassCode) {
        console.log('NexStateaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      } else {
        this.setState({incorrectPasscode: 'pincode is incorrect'});
        this.setState({ePassCode: ''});
      }
    }
    if (this.state.ePassCode.length < 4) {
      this.setState({incorrectPasscode: ''});
    }
  };

  static getDerivedStateFromProps(props: any, state: any) {
    state.actualPassCode = props.data.firebaseData.password;
    return state;
  }

  renderPinText() {
    return this.state.ePassCode.split('').map((item: any,j:any) => (
      <Text
        key={j}
        style={{
          fontSize: 25,
          color: 'black',
          fontFamily: 'Nunito-Regular',
          textAlign: 'center',
          marginLeft: 50,
          marginTop:20,
        }}>
        {item}
        {'    '}
      </Text>
    ));
  }

  render() {
    return (
      <SafeAreaView>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontFamily: 'Nunito-Regular',
            textAlign: 'center',
            marginTop: parseInt(windowHeight)-700,
          }}>
          Enter Pincode
        </Text>
        <View style={{flexDirection: 'row'}}>{this.renderPinText()}</View>
        <Text
          style={{
            fontSize: 15,
            color: 'red',
            fontFamily: 'Nunito-Regular',
            textAlign: 'center',
            marginTop: 10,
          }}>
          {this.state.incorrectPasscode}
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop:10}}>
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
      </SafeAreaView>
    );
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

export default connect(mapStateToProps, null)(PassCodePage);
