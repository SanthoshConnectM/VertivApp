import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Surface, Card, Title, Paragraph } from 'react-native-paper';

class Dashboard extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);

    }


    render(): React.ReactNode {
        return (
            <SafeAreaView style={{ marginTop: 5 }}>
                <Surface style={{elevation:1}}>
                    <Card elevation={1} style={{margin:0}}>
                        <Card.Content>
                            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                            <Text style={{ fontSize: 40, color: "black", fontFamily: 'Nunito-Regular'}}>60</Text>
                            <Text>{'%'}</Text>
                            <Text style={{ fontSize: 40, color: "black", fontFamily: 'Nunito-Regular'}}>134</Text>
                            <Text>Hello</Text>
                            <Text style={{ fontSize: 40, color: "black", fontFamily: 'Nunito-Regular'}}>145</Text>
                            <Text>Hello</Text>
                            </View>
                        <View style={{flexDirection:"row",margin:10,justifyContent:"space-evenly"}}>
                            <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular'}}>Active rate</Text>
                            <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular'}}>Healthy</Text>
                            <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular'}}>Faulty</Text>
                        </View>
                        </Card.Content>
                    </Card>
                </Surface>
            </SafeAreaView>
        );
    }
}

export default Dashboard;