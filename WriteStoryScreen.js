import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements'
import db from './config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    SearchFilterFunction = async (search) => {
        this.setState({ search })
    }

    render() {
        return (
            <View>
                <Text>Write some stories</Text>
                <SearchBar
                    placeholder="Type here"
                    onChangeText={this.SearchFilterFunction}
                    value={search}
                />
            </View>
        )
    }
}