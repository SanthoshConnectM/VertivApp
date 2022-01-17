import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  Modal,
  StyleSheet,
  Button as RNButton,
} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Button, Card, Surface} from 'react-native-paper';


class SiteItem extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isMessageModalOpen: false,
      isInfoModalOpen: false,
      showMessageButton: true,
      modal_data: {},
      siteData: {},
      filteredSiteData: {},
      search_text: '',
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.data.firebaseData.modal_data != undefined) {
      let mData: any = JSON.parse(
        JSON.stringify(props.data.firebaseData.modal_data),
      );
    }
    if (props.data.siteData != undefined) {
      state.siteData = props.data.siteData;
      state.filteredSiteData = props.data.siteData;
    }
    state.search_text = props.data.searchText;
    state.showMessageButton = props.data.firebaseData.commands_access;
    state.modal_data = props.data.firebaseData.modal_data;
    return state;
  }

  handleMessageClick = (item: any) => {
    // console.log('MessageClick', item);
  };

  handleInfoClick = () => {
    // this.setState({isInfoModalOpen: true});
  };

  renderSearchSiteItem = () => {
    let data: any = this.state.siteData.data.filter((item: any) => {
      return Object.values(item.capacity)
        .join('')
        .toLowerCase()
        .includes(this.state.search_text.toLowerCase());
    });
    console.log('searchtermmmmmmmmm', data);
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
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -1,
                            fontSize: 22,
                            color: 'black',
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.capacity}{' '}
                          {/* {item.tagStatus === 'RTU Running' ? (
                            <Button icon="trending-up" color="green">
                              {''}
                            </Button>
                          ) : (
                            <Button icon="trending-down" color="red">
                              {''}
                            </Button>
                          )} */}
                        </Text>
                        {/* <Text style={{ marginLeft: 10, marginTop: -1, fontSize: 15, fontFamily: 'Nunito-Regular' }}>{item.assetId}</Text> */}
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -1,
                            fontSize: 15,
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.assetId}
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
                        this.handleMessageClick(item.contactDetail)
                      }>
                      MESSAGE
                    </Button>
                  )}
                  <Button
                    icon={'information'}
                    onPress={() => this.handleInfoClick()}>
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
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -1,
                            fontSize: 22,
                            color: 'black',
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.capacity}{' '}
                          {/* {item.tagStatus === 'RTU Running' ? (
                            <Button icon="trending-up" color="green">
                              {''}
                            </Button>
                          ) : (
                            <Button icon="trending-down" color="red">
                              {''}
                            </Button>
                          )} */}
                        </Text>
                        {/* <Text style={{ marginLeft: 10, marginTop: -1, fontSize: 15, fontFamily: 'Nunito-Regular' }}>{item.assetId}</Text> */}
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            marginTop: -1,
                            fontSize: 15,
                            fontFamily: 'Nunito-Regular',
                          }}>
                          {item.assetId}
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
                        this.handleMessageClick(item.contactDetail)
                      }>
                      MESSAGE
                    </Button>
                  )}
                  <Button
                    icon={'information'}
                    onPress={() => this.handleInfoClick()}>
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

  render(): React.ReactNode {
    console.log('search query', this.state.search_text);
    if (this.state.search_text == '') {
      return (
        <SafeAreaView style={{marginTop: 5}}>
          {this.renderSiteItem()}
        </SafeAreaView>
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

export default connect(mapStateToProps, null)(SiteItem);
