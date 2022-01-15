import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Keyboard } from 'react-native'; 



class SearchBar extends React.PureComponent<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            searchText:''
        }
    }

    onChangeSearch = (query:any) =>{
        console.log("Searchinggggggggggggggggggg",query.length)
        this.setState({searchText:query})
        // if(query.length === 0){
        //     Keyboard.dismiss()
        // }
    }

    render(): React.ReactNode {
        return (
            <View style={{elevation:1}}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={this.onChangeSearch}
                    value={this.state.searchText}
                />
            </View>
        );
    }
}

export default SearchBar;