import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, FlatList, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'
import { createAppContainer } from 'react-navigation'
import { createbottomTabNavigation } from 'react-navigation-tabs'
import db from './config'
import firebase from 'firebase'

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            Username: '',
            Password: ''
        }
    }
    login = async(email,password) => {
        if(email && password){
          try{
            const response= await firebase.auth().signInWithEmailAndPassword(email, password)
            if(response){
              this.props.navigation.navigate(WriteStoryScreen)
            }
          }catch(error){
            switch(error.code){
              case "auth/user-not-found" : 
              alert("User does not exsist")
              break;
              case "auth/invaild-email" :
              alert("Incorrect email or password")
              break;
            }
          }
        }else {
          alert("Enter Email and Password")
        }
      }
    
      render() {
        return (
          <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }}>
            <View>
              <TextInput
                style={styles.loginBox}
                placeholder="UsernameABC"
                keyboardType="email-address"
                onChangeText={(text) => {
                  this.setState({
                    Username: text,
                  });
                }}
              />
              <TextInput
                style={styles.loginBox}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    Password: text,
                  });
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 90,
                  borderWidth: 1,
                  marginTop: 20,
                  backgroundColor: '#45abc',
                  borderRadius: 30,
                }}
                onPress={() => {
                  this.login(this.state.Username, this.state.Password)
                }}>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 100,
      height:50
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    },
    transactionAlert:{
      margin:10,
      color: 'red'
    }
  });