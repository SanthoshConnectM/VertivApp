import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Keyboard } from 'react-native'; 
import { connect } from 'react-redux';
import { setSearchText,clearSearchText } from '../../../actions';



class SearchBar extends React.PureComponent<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            searchText:''
        }
    }

    onChangeSearch = (query:any) =>{
        this.setState({searchText:query})
        if(query == ''){
            this.props.clearSearch()
        }
        this.props.insertSearchText(query)
    }

    static getDerivedStateFromProps(props:any,state:any){
        return state;
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

const mapStateToProps = (state:any) => {
    return state;
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        insertSearchText : (message:any) =>{
            dispatch(setSearchText(message))
        },
        clearSearch : () => {
            dispatch(clearSearchText())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);