import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, FlatList, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'
import LoginScreen from './screens/LoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createbottomTabNavigation } from 'react-navigation-tabs'
import db from './config'
import firebase from 'firebase'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      story: '',
      title: '',
      author: '',
      search: ''
    }
  }

  submitStory = async () => {
    db.collection('Story').doc(this.state.story).update({
      story: 'Read'
    })

    db.collection('Title').doc(this.state.title).update({
      title: 'Read'
    })

    db.collection('Author').doc(this.state.author).update({
      author: 'Suzan Collins'
    })

    if (story !== 'Read') {
      ToastAndroid.alert("Story is invalid", ToastAndroid.SHORT)
    }
  }

  updateSearch = async (search) => {
    this.setState({ search });
  }

  Item = async ({ title }) => {
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  };

  App = async () => {
    const renderStory = ({ story }) => (
      <Item title={story.title} />
    )
  };


  render() {
    return (
      <KeyboardAvoidingView>
        <AppContainer />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            this.submitStory
          }}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
        <SearchBar
          placeholder="Type here"
          onChangeText={this.updateSearch}
          value={search}
        />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderStory}
            keyExtractor={story => story.id}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}

const switchNavigator = createSwitchTabNavigator({
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer
  (switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#12aa44'
  }
});
