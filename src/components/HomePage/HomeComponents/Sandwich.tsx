import React from 'react';
import {View,Text} from 'react-native';


class Sandwich extends React.PureComponent<any,any>{

    render(): React.ReactNode {
        return(
            <View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 15, color: "black", fontFamily: 'Nunito-Regular',marginTop:3}}>Total sites[279]</Text>
                </View>
            </View>
        );
    }
}

export default Sandwich;