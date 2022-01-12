import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

interface PinCodeProps {
}
interface PinCodeState {
    ePassCode: string
    keyrow1: any,
    keyrow2: any,
    keyrow3: any,
    incorrectPasscode: string,
    actualPassCode:string
}
export default class PassCodePage extends React.PureComponent<PinCodeProps, PinCodeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            ePassCode: '',
            keyrow1: ['1', '2', '3'],
            keyrow2: ['4', '5', '6'],
            keyrow3: ['7', '8', '9'],
            incorrectPasscode: '',
            actualPassCode:'3142',
        }
    }

    onKeyPadPress = (e: any) => {
        let eCode  = this.state.ePassCode + e
        this.setState({ePassCode:eCode})
        console.log(this.state.ePassCode)
        if(this.state.ePassCode.length === 4){
            if(this.state.ePassCode === this.state.actualPassCode){
                console.log("NexStateaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            }else{
                this.setState({incorrectPasscode:"pincode is incorrect"})
                this.setState({ePassCode:''})
            }
        }
        if(this.state.ePassCode.length > 4){
            this.setState({incorrectPasscode:"pincode is incorrect"})
            this.setState({ePassCode:''})
        }
        if(this.state.ePassCode.length < 4){
            this.setState({incorrectPasscode:""})
        }
    }

    renderPinText(){
        return this.state.ePassCode.split("").map((item:any) => <Text key={item} style={{ fontSize: 25, color: "black", fontFamily: 'Nunito-Regular', textAlign: "center", marginTop: 20,marginLeft:50}}>{item}{"    "}</Text>);
    }


    render() {
        return (
            <SafeAreaView>
                <Text style={{ fontSize: 25, color: "black", fontFamily: 'Nunito-Regular', textAlign: "center", marginTop: 40 }}>Enter Pincode</Text>
                <View style={{flexDirection:"row"}}>
                    {this.renderPinText()}
                </View>
                <Text style={{ fontSize: 15, color: "red", fontFamily: 'Nunito-Regular', textAlign: "center", marginTop: 5 }}>{this.state.incorrectPasscode}</Text>
                <View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        {
                            this.state.keyrow1.map((item: any) => {
                                return (
                                    <TouchableOpacity
                                        key={item}
                                        onPress={() => this.onKeyPadPress(item)}
                                        style={styles.roundButton1}>
                                        <Text style={{ fontSize: 25, color: "black" }} key={item}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        {
                            this.state.keyrow2.map((item: any) => {
                                return (
                                    <TouchableOpacity
                                        key={item}
                                        onPress={() => this.onKeyPadPress(item)}
                                        style={styles.roundButton1}>
                                        <Text key={item} style={{ fontSize: 25, color: "black" }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        {
                            this.state.keyrow3.map((item: any) => {
                                return (
                                    <TouchableOpacity
                                        key={item}
                                        onPress={() => this.onKeyPadPress(item)}
                                        style={styles.roundButton1}>
                                        <Text key={item} style={{ fontSize: 25, color: "black" }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>

                        <TouchableOpacity
                            key={"0"}
                            onPress={() => this.onKeyPadPress("0")}
                            style={styles.roundButton1}>
                            <Text style={{ fontSize: 25, color: "black" }}>0</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        height: 60,
        marginTop: 20,
        fontSize: 25,
        borderWidth: 1,
        textAlign: "center"
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
        backgroundColor: "#DCDCDC",
    },
    pincodeText:{
        fontSize:20,
        color:"black",
        justifyContent: "center",
        alignItems: "center"
    }
});
