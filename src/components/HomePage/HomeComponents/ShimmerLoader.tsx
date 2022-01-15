import Shimmer from 'react-native-shimmer';
import React from 'react';
import {View,Text} from 'react-native';

class ShimmerLoader extends React.Component{
    constructor(props:any){
        super(props)
    }
    render(): React.ReactNode {
        return(
            <View>
                <Shimmer>
                    <View style={{width:100,height:30}}>
                        <Text></Text>
                    </View>
                </Shimmer>
            </View>
        )
    }
}

export default ShimmerLoader;