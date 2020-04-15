import  React, { Component } from 'react';
import  { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image, FlatList, button } from 'react-native';
import { Icon } from 'native-base';
import {SearchBar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {create} from 'apisauce'
import {Linking} from 'expo'

class OPGG extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <SafeAreaView>

      </SafeAreaView>
    )
  }
}

export default OPGG;
