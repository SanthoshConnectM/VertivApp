import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Button, Card, Surface} from 'react-native-paper';

class SiteItem extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isMessageModalOpen: false,
      isInfoModalOpen: false,
      showMessageButton: false,
      siteData: {
        data: [
          {
            organization: 'HOME',
            customer: 'BLUE STAR',
            country: 'WEST',
            state: 'MUMBAI',
            siteName: 'Thane',
            siteLat: 19.1967046,
            siteLong: 72.9507849,
            focusLevel: 11,
            assetId: 'HR331500',
            siteType: 'CHILLER',
            tagName: 'CM29HEARTBEAT',
            tagStatus: 'RTU Running',
            tagStatus1: null,
            faultStatus: '',
            recivedTime: '2021-11-29 15:23:39',
            capacity: 'Vertiv',
            porfolio: 'UPS',
            substation: ' UPS',
            modeltype: 'MCS',
            contactDetail: '918105574316000',
            modelNo: 'NXR 150 KVA UPS',
            cordinates: 'N19 13 6 E72 58 41',
            priorety: 1,
            imiNo: '359983003608696',
            serialNo: '201303NRO421',
            ibaseNo: '201',
            productType: ' UPS',
            assetImageUrl: '/Device_Images/APM.png',
            assetImportantParams:
              'Input_phase_voltage_A,Input_phase_voltage_B,Input_phase_voltage_C,Output_phase_voltage_A,Output_phase_voltage_B,Output_phase_voltage_c,Output_Frequency,Input_phase_current_A,Input_phase_current_B,Input_phase_current_C,',
            devId: '01',
            dataRefreshTime: '0060',
            ADDRESS: 'Thane',
            protocol_name: '0b06',
            industry: 'Vertiv Energy',
            tr: '10',
            refrigerant: '10',
            Battery: 'Yes',
            BatteryRTU: 'No',
            BatteryTime: null,
            lat: 0,
            longi: 0,
          },
          {
            organization: 'HOME',
            customer: 'BLUE STAR',
            country: 'WEST',
            state: 'MUMBAI',
            siteName: 'Thane',
            siteLat: 19.1967046,
            siteLong: 72.9507849,
            focusLevel: 11,
            assetId: 'HR331501',
            siteType: 'CHILLER',
            tagName: 'CM32HEARTBEAT',
            tagStatus: 'RTU Fault',
            tagStatus1: null,
            faultStatus: '',
            recivedTime: '2021-11-29 15:23:39',
            capacity: 'Vertiv',
            porfolio: 'BATTERY',
            substation: ' BATTERY',
            modeltype: 'MCS',
            contactDetail: '918197845673000',
            modelNo: 'NXR 150 KVA UPS',
            cordinates: 'N19 13 6 E72 58 41',
            priorety: 1,
            imiNo: '359983003608696',
            serialNo: '201303NRO000',
            ibaseNo: '813676',
            productType: ' BATTERY',
            assetImageUrl: '/Device_Images/BatteryMonitoring_rezied.png',
            assetImportantParams:
              'Cell_Voltage_1,Cell_Voltage_2,Cell_Voltage_3,Cell_Voltage_4,Cell_Voltage_5,Cell_Resistance_1,Cell_Resistance_2,Cell_Resistance_5,Cell_Resistance_3,Cell_Resistance_4,Cell_Temperature_1,Cell_Temperature_2,',
            devId: '02',
            dataRefreshTime: '0060',
            ADDRESS: 'Thane',
            protocol_name: '0d06',
            industry: 'Vertiv Energy',
            tr: '350',
            refrigerant: '120',
            Battery: 'No',
            BatteryRTU: 'No',
            BatteryTime: null,
            lat: 0,
            longi: 0,
          },
          {
            organization: 'HOME',
            customer: 'BLUE STAR',
            country: 'SOUTH',
            state: 'Bangalore',
            siteName: 'Bannerghatta Road',
            siteLat: 12.9330052,
            siteLong: 77.6002255,
            focusLevel: 11,
            assetId: '2008004HI2557',
            siteType: 'CHILLER',
            tagName: 'CM31HEARTBEAT',
            tagStatus: 'RTU Fault',
            tagStatus1: null,
            faultStatus: '',
            recivedTime: '2021-12-18 13:07:07',
            capacity: 'BDC3A',
            porfolio: 'UPS',
            substation: ' UPS',
            modeltype: 'MCS',
            contactDetail: '+918105574316000',
            modelNo: 'HP 80KVA',
            cordinates: 'N12 58 18 E77 35 40',
            priorety: 1,
            imiNo: '359983007485653',
            serialNo: '2008004HI2557',
            ibaseNo: '111',
            productType: ' UPS',
            assetImageUrl: '/Device_Images/BDC3A.jpg',
            assetImportantParams:
              'Output_Voltage_Phase_A,Output_Voltage_Phase_B,Output_Voltage_Phase_C,Battery_Voltage,Battery_Current,',
            devId: '01',
            dataRefreshTime: '0060',
            ADDRESS: 'Bangalore',
            protocol_name: '0a06',
            industry: 'Accenture',
            tr: '110',
            refrigerant: '120',
            Battery: 'Yes',
            BatteryRTU: 'No',
            BatteryTime: null,
            lat: 0,
            longi: 0,
          },
          {
            organization: 'HOME',
            customer: 'BLUE STAR',
            country: 'SOUTH',
            state: 'Bangalore',
            siteName: 'Ecospace_1',
            siteLat: 12.923243,
            siteLong: 77.679739,
            focusLevel: 11,
            assetId: '201011HX0314',
            siteType: 'CHILLER',
            tagName: 'CM30HEARTBEAT',
            tagStatus: 'RTU Fault',
            tagStatus1: null,
            faultStatus: '',
            recivedTime: '2021-04-19 15:52:08',
            capacity: 'BDC7C',
            porfolio: 'UPS',
            substation: ' UPS',
            modeltype: 'MCS',
            contactDetail: '+916366369264000',
            modelNo: 'HP 120KVA',
            cordinates: 'N39 46 21 W105 0 30',
            priorety: 1,
            imiNo: '355465071519413',
            serialNo: 'B7C 5th FLR WS UPS',
            ibaseNo: '111',
            productType: ' UPS',
            assetImageUrl: '/Device_Images/BDC7C.jpg',
            assetImportantParams:
              'Output_Voltage_Phase_A,Output_Voltage_Phase_B,Output_Voltage_Phase_C,Battery_Voltage,Battery_Current,',
            devId: '01',
            dataRefreshTime: '0060',
            ADDRESS: 'Ecospace',
            protocol_name: '0a06',
            industry: 'Accenture',
            tr: '220',
            refrigerant: 'R134A',
            Battery: 'Yes',
            BatteryRTU: 'No',
            BatteryTime: null,
            lat: 0,
            longi: 0,
          },
        ],
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRva2VuZ2VuIiwiaWF0IjoxNjQyMTMwODYzLCJleHAiOjE2NDIxMzE0NjN9.-wcKOlU7Le9PhLqhB22sylYLqwvsJDDiFDxei2066I4',
        success: true,
      },
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("SiteItem",props.data.firebaseData.commands_access)
    state.showMessageButton = props.data.firebaseData.commands_access;
    return state;
  }

  handleMessageClick = (item: any) => {
    console.log('MessageClick', item);
  };

  handleInfoClick = (item: any) => {
    this.setState({isInfoModalOpen: true});
  };

  renderSiteItem = () => {
    return this.state.siteData.data.map((item: any) => {
      return (
        <Surface style={{elevation: 1, marginTop: 3}}>
          <View>
            <Modal
              transparent={true}
              visible={this.state.isInfoModalOpen}
              onRequestClose={() => {
                this.setState({isInfoModalOpen: false});
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <ScrollView>
                    <Text style={styles.modalText}>Hello World!</Text>
                  </ScrollView>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setState({isInfoModalOpen: false})}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
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
                          fontSize: 20,
                          color: 'black',
                          fontFamily: 'Nunito-Regular',
                        }}>
                        {item.capacity}{' '}
                        {item.tagStatus === 'RTU Running' ? (
                          <Button icon="trending-up" color="green">
                            {''}
                          </Button>
                        ) : (
                          <Button icon="trending-down" color="red">
                            {''}
                          </Button>
                        )}
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
                    onPress={() => this.handleMessageClick(item.contactDetail)}>
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
  };

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{marginTop: 5}}>
        {this.renderSiteItem()}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, null)(SiteItem);
