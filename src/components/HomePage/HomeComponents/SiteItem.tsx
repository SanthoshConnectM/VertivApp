import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Button as RNButton,
} from 'react-native';
import {connect} from 'react-redux';
import {
  Provider,
  Button,
  Card,
  Surface,
  Portal,
  TextInput,
} from 'react-native-paper';
import {BottomSheet} from 'react-native-btr';
import SendSMS from 'react-native-sms'

class SiteItem extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isMessageModalOpen: false,
      isInfoModalOpen: false,
      showMessageButton: true,
      modal_data: [],
      commands_list: [],
      siteData: {},
      filteredSiteData: {},
      search_text: '',
      infoModalData: '',
      smsNumber: '',
      smsSiteName: '',
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.data.siteData != undefined) {
      state.siteData = props.data.siteData;
      state.filteredSiteData = props.data.siteData;
    }
    state.search_text = props.data.searchText;
    state.showMessageButton = props.data.firebaseData.commands_access;
    state.modal_data = props.data.firebaseData.modal_data.split(',');
    state.commands_list = props.data.firebaseData.commands_list.split(',');
    return state;
  }

  handleMessageClick = (contactInfo: any, siteName: any) => {
    this.setState({
      isMessageModalOpen: true,
      smsNumber: contactInfo,
      smsSiteName: siteName,
    });
  };

  handleInfoClick = (item: any) => {
    this.setState({isInfoModalOpen: true, infoModalData: item});
  };

  renderSearchSiteItem = () => {
    let data: any = this.state.siteData.data.filter((item: any) => {
      return Object.values(item.capacity)
        .join('')
        .toLowerCase()
        .includes(this.state.search_text.toLowerCase());
    });
    if (data.length == 0) {
      return <Text>No sites found</Text>;
    } else {
      return data.map((item: any, j: any) => {
        return (
          <Surface style={{elevation: 1, marginTop: 3}} key={j}>
            <ScrollView horizontal={true}>
              <Card elevation={2}>
                <Card.Content>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{
                        uri:
                          'https://vertiv.yantracloud.io/' + item.assetImageUrl,
                      }}
                    />
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              marginLeft: 10,
                              marginTop: -1,
                              fontSize: 20,
                              color: 'black',
                              fontFamily: 'Nunito-Regular',
                            }}>
                            {item.assetId}
                          </Text>
                          <View style={{marginTop: -15, marginLeft: -10}}>
                            {item.tagStatus === 'RTU Running' ? (
                              <Button
                                icon="trending-up"
                                color="green"
                                labelStyle={{fontSize: 25}}>
                                {''}
                              </Button>
                            ) : (
                              <Button
                                icon="trending-down"
                                color="red"
                                labelStyle={{fontSize: 25}}>
                                {''}
                              </Button>
                            )}
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -10,
                            fontSize: 15,
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.capacity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card.Content>
                <Card.Actions>
                  {this.state.showMessageButton && (
                    <Button
                      icon={'message'}
                      onPress={() =>
                        this.handleMessageClick(
                          item.contactDetail,
                          item.capacity,
                        )
                      }>
                      MESSAGE
                    </Button>
                  )}
                  <Button
                    icon={'information'}
                    onPress={() => this.handleInfoClick(item)}>
                    INFO
                  </Button>
                </Card.Actions>
              </Card>
            </ScrollView>
          </Surface>
        );
      });
    }
  };

  renderSiteItem = () => {
    if (Object.keys(this.state.siteData).length != 0) {
      return this.state.siteData.data.map((item: any, j: any) => {
        return (
          <Surface style={{elevation: 1, marginTop: 3}} key={j}>
            <ScrollView horizontal={true}>
              <Card elevation={2}>
                <Card.Content>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{
                        uri:
                          'https://vertiv.yantracloud.io/' + item.assetImageUrl,
                      }}
                    />
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              marginLeft: 10,
                              marginTop: -1,
                              fontSize: 20,
                              color: 'black',
                              fontFamily: 'Nunito-Regular',
                            }}>
                            {item.assetId}
                          </Text>
                          <View style={{marginTop: -15, marginLeft: -10}}>
                            {item.tagStatus === 'RTU Running' ? (
                              <Button
                                icon="trending-up"
                                color="green"
                                labelStyle={{fontSize: 25}}>
                                {''}
                              </Button>
                            ) : (
                              <Button
                                icon="trending-down"
                                color="red"
                                labelStyle={{fontSize: 25}}>
                                {''}
                              </Button>
                            )}
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -10,
                            fontSize: 15,
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.capacity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card.Content>
                <Card.Actions>
                  {this.state.showMessageButton && (
                    <Button
                      icon={'message'}
                      onPress={() =>
                        this.handleMessageClick(
                          item.contactDetail,
                          item.capacity,
                        )
                      }>
                      MESSAGE
                    </Button>
                  )}
                  <Button
                    icon={'information'}
                    onPress={() => this.handleInfoClick(item)}>
                    INFO
                  </Button>
                </Card.Actions>
              </Card>
            </ScrollView>
          </Surface>
        );
      });
    } else {
      return <Text>Helloooooooo</Text>;
    }
  };

  onMessageGo(item:any){
    SendSMS.send({
      body: item,
      successTypes: ['sent', 'queued'],
      recipients: new Array(this.state.smsNumber),
      allowAndroidSendWithoutReadPermission: true
   }, (completed, cancelled, error) => {
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
    });
  }

  render(): React.ReactNode {
    if (this.state.isMessageModalOpen) {
      return (
        <BottomSheet visible={this.state.isMessageModalOpen}>
          <View style={styles.bottomNavigationView}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 22,
                  marginTop: 10,
                  color: 'black',
                  fontFamily: 'Nunito-Regular',
                }}>
                Instant SMS
              </Text>
              <Button
                style={{marginLeft: 'auto'}}
                icon="close"
                onPress={() => this.setState({isMessageModalOpen: false})}>
                Close
              </Button>
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                marginTop: 5,
                fontFamily: 'Nunito-Regular',
              }}>
              Sending SMS command for {this.state.smsSiteName}
            </Text>

            <TextInput
              label="SIM number (editable)"
              mode="flat"
              keyboardType='numeric'
              onChangeText={text => this.setState({smsNumber: text})}
              value={this.state.smsNumber}
              style={{width: '98%', marginTop: 15, marginLeft: 10}}
            />

            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                fontSize: 15,
                color: 'black',
                marginTop: 5,
                marginLeft: 10,
              }}>
              Choose a command
            </Text>

            <View style={{marginTop: 10, height: '100%', flex: 1}}>
              <ScrollView>
                {this.state.commands_list.map((item: any,j:any) => {
                  return (
                    <TouchableOpacity onPress={() =>  this.onMessageGo(item.split(":")[0])} key={j}>
                      <View style={{marginLeft: 10, marginTop: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 18,
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.split(':')[0]}
                        </Text>
                        <Text style={{fontFamily: 'Nunito-Regular'}}>
                          {item.split(':')[1]}
                        </Text>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: '#DCDCDC',
                          }}></View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </BottomSheet>
      );
    }
    if (this.state.isInfoModalOpen) {
      return (
        <BottomSheet visible={this.state.isInfoModalOpen}>
          <View style={styles.bottomNavigationView}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 22,
                  marginTop: 10,
                  color: 'black',
                  fontFamily: 'Nunito-Regular',
                }}>
                Site Details
              </Text>
              <Button
                style={{marginLeft: 'auto'}}
                icon="close"
                onPress={() =>
                  this.setState({isInfoModalOpen: false, infoModalData: ''})
                }>
                Close
              </Button>
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                marginTop: 5,
                fontFamily: 'Nunito-Regular',
              }}>
              Showing details for {this.state.infoModalData.capacity}
            </Text>
            <View style={{marginTop: 10, height: '100%', flex: 1}}>
              <ScrollView>
                {this.state.modal_data.map((item: any,j:any) => {
                  return (
                    <View style={{padding: 8}} key={j}>
                      <Text
                        style={{
                          fontFamily: 'Nunito-Regular',
                        }}>
                        {item.split(':')[0]}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontFamily: 'Nunito-Regular',
                          flexWrap: 'wrap',
                          flex: 1,
                        }}>
                        {this.state.infoModalData[item.split(':')[1]]}
                      </Text>
                      <View
                          style={{
                            height: 1,
                            backgroundColor: '#DCDCDC',
                          }}></View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </BottomSheet>
      );
    }
    if (this.state.search_text == '') {
      return (
        <View style={{marginTop: 5, flex: 1}}>{this.renderSiteItem()}</View>
      );
    } else {
      return (
        <SafeAreaView style={{marginTop: 5}}>
          {this.renderSearchSiteItem()}
        </SafeAreaView>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default connect(mapStateToProps, null)(SiteItem);
