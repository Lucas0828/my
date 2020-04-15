import  React, { Component } from 'react';
import  { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image, FlatList, button } from 'react-native';
import { Icon } from 'native-base';
import {SearchBar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {create} from 'apisauce';

class Matchinfo extends Component {
  constructor(props) {
    super(props);
    const { route, navigation } = this.props;
    const { champname ,name, kills, deaths, assists, champLevel, imageurl, win} = route.params;
    this.state={
      name:name,
      champname:champname,
      kills:kills,
      deaths:deaths,
      assists:assists,
      champLevel:champLevel,
      imageurl:imageurl,
      win:win
    }
  }
  render(){
    const {champname,name,kills,deaths,assists,champLevel,imageurl} = this.state;
    const kda = ((kills+assists)/deaths).toFixed(1)
    return (
      <SafeAreaView style={{
          ...style.base,
          backgroundColor: this.state.win === true ? '#d9f3fa':'red'
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={{marginTop:30}} />
          <Image
          style={{width: 250, height: 250, borderRadius: 20 }}
          source={{uri: imageurl}}
           />
         <Text style={{fontSize: 25,}}>{champname}</Text>
           <Text style={{}}>{champLevel}</Text>
        </View>
        <View style={{marginTop: 30}}/>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>KDA : {kda}</Text>
          <Text style={{fontSize: 20}}>{kills} / {deaths} / {assists}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  base:{
    flex:1,
  },
});

export default Matchinfo;
