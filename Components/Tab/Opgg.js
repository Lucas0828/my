import  React, { Component } from 'react';
import  { View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  FlatList,
  button } from 'react-native';
import { Icon } from 'native-base';
import Contacts from 'react-native-contacts';
import {SearchBar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {create} from 'apisauce'
import {Linking} from 'expo'

class OPGG extends Component {
  constructor(props) {
    super(props)
    this.state=({
      number: "01036694655",
      Name: "lucas",
    })
  }

  componentDidMount(){

  }

  render(){
    return(
      <SafeAreaView>
        <Inf />
      </SafeAreaView>
    )
  }
}

function Inf(){
  return(
    <TouchableOpacity
      onPress={()=> addUserContacts()}
      >
      <Text>sssssssssssssssss</Text>
    </TouchableOpacity>
  )
}

const addUserContacts = (props) =>{
      let number="01036694655";
      let newPerson = {
        phoneNumbers: [{
          label: "mobile",
          number: number,
        }],
        displayName: "name",
      };

      Contacts.openContactForm(newPerson, (err) => {
        if (err) console.warn(err) ;
      });
  };
export default OPGG;
