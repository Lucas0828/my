import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import GameRecord from './Tab/GameRecord'
import Champion from 'Components/Tab/Champion'
import Rank from 'Components/Tab/Rank'
import Opgg from './Tab/Opgg'

const AppTabNavigator = createBottomTabNavigator({
  전적검색: {screen:GameRecord},
  챔피언: {screen:Champion},
  순위: {screen: Rank},
  OPGG: {screen: Opgg}
});

const AppTapContainet = createAppContainer(AppTabNavigator)

export default class  extends Component {
  static navigationOptions = {
    title: 'LOL 전적 검색',
  }
  render() {
    return <AppTapContainet/>;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
