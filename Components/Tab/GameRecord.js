import  React, { Component } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import {SearchBar} from 'react-native-elements';

export  default class GameRecord extends Component{
  state= {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = 'ios-search' style={{ color: tintColor }} />
    )
  }
  render(){
    const { search } = this.state;
    return(
      <SearchBar
      onChangeText={this.updateSearch}
      value={search}
      round
      placeholder="소환사명을 입력해주세요"
      cancelButtonTitle="Cancel"
    />
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
