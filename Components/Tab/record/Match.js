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
import {SearchBar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {champions} from 'Components/Tab/Champion.js';
import {queueType, lane} from 'Components/Tab/record/etc.js'
import {create} from 'apisauce';

class Match extends Component {
 constructor(props){
    super(props);
    const { route, navigation } = this.props;
    const { name, usermatch } = route.params;
    this.state={
      loading: 0,
      gameId: null,
      championId: '',
      queueType: queueType,
      champions: champions,
      usermatch: usermatch,
      win: true,
      assists: 0,
      kills: 0,
      deaths: 0,
      champLevel: 0,
      imageurl: '',
    }
    this.matchinfo = this.matchinfo.bind(this)
  }


/*
const {champname, kills, deaths, assists, champLevel, imageurl} = this.state;
navigation.push('Matchinfo', {
  champname:champname,
  name:name,
  kills:kills,
  deaths:deaths,
  assists:assists,
  champLevel:champLevel,
  imageurl:imageurl
})
*/

async matchinfo(){
    const {navigation, route } = this.props;
    const { name } = route.params;
    if (this.state.gameId != null) {

      const championId = this.state.championId;

      const usermatchinfo = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490',}})
      let info = await usermatchinfo.get(`/lol/match/v4/matches/${this.state.gameId}`)
      const datachampionId = info.data.participants

      const datachampionIdlist = {}
      datachampionId.forEach(Id => {
        datachampionIdlist[Id['championId']] = Id
      })

      this.setState({
        kills: datachampionIdlist[`${this.state.championId}`].stats.kills,
        deaths: datachampionIdlist[`${this.state.championId}`].stats.deaths,
        assists: datachampionIdlist[`${this.state.championId}`].stats.assists,
        champLevel: datachampionIdlist[`${this.state.championId}`].stats.champLevel,
        win: datachampionIdlist[`${this.state.championId}`].stats.win,
        gameId: null
      })
      const {champname, kills, deaths, assists, champLevel, imageurl, win} = this.state;
      navigation.push('Matchinfo', {
        champname:champname,
        name:name,
        win:win,
        kills:kills,
        deaths:deaths,
        assists:assists,
        champLevel:champLevel,
        imageurl:imageurl
      })
    }
  }

  componentDidMount(){
    this.setState({
      loading: 1,
    })
  }

  render(){
    const {route,navigation} = this.props;
    const {name, usermatch} = route.params;

    if (this.loading == 0) {
      return <View />
    } else {
    const championList = {}
    champions.forEach(champion => {
      championList[champion['id']] = champion
    });

    return (
      <SafeAreaView>
        <ScrollView>
          {usermatch.map(info => {
            return <TouchableOpacity key={info['gameId']} onPress={()=> { this.setState({
                champname: championList[info['champion']].champion ,gameId: [info['gameId']],
                championId: [info['champion']],
                imageurl: championList[info['champion']].thumbnail
              }) || this.matchinfo() }} >
              <View style={{
                  ...style.View,
                  backgroundColor: '#d9f3fa'
                }}>
                <Image
                style={{width: 90, height: 90, borderRadius: 20}}
                source={{uri: championList[info['champion']].thumbnail}}
                 />
                <Text style={style.font}>
                  {championList[info['champion']].champion}
                </Text>
                <Text stlye={{}}>
                  {queueType[info['queue']]}
                </Text>
              </View>
            </TouchableOpacity>
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
}


const style = StyleSheet.create({
  font:{
    flex: 1,
    alignItems: 'center',
    fontSize: 25
  },
  View:{
    borderColor: '#ffffff',
    borderWidth: 1,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }
})

export default Match;
