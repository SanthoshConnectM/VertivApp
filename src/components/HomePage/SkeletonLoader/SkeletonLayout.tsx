import React from 'react';
import { Text, View } from 'react-native';

class SkeletonLayout extends React.Component{
    render(): React.ReactNode {
        return(
            <View>
                <Text>SK</Text>
            </View>
        );
    }
}

export default SkeletonLayout;