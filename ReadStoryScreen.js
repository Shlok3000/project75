import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements'
import db from './config'
import firebase from 'firebase'

export default class ReadStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    retriveStories = async (search) => {
        this.setState({ search });
    }

    render() {
        return (
            <View>
                <Text>Read some stories</Text>
                <SearchBar
                    placeholder="Type here"
                    onChangeText={this.retriveStories}
                    value={search}
                />
            </View>
        )
    }
}