import  React, { Component } from 'react';
import  { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image, FlatList, button } from 'react-native';
import { Icon } from 'native-base';
import {SearchBar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {create} from 'apisauce'
import {Linking} from 'expo'
import Match from 'Components/Tab/record/Match.js'
import Matchinfo from 'Components/Tab/record/Matchinfo.js'

class GameRecord extends Component{
  constructor(props) {
    super(props);
    this.state = {
      soloid: '',
      frid: '',
      solo_rank: '',
      solo_tier: '개인랭크',
      fr_rank: '',
      fr_tier: '자유랭크',
      search: '게임 지는 방법',
      solowinloss: '',
      frwinloss:'',
      level: 'level',
      profileid: '29',
      name: '소환사 명',
      sumid: '',
      sumgameid: '',
      usermatchinfo: '',
    }
    this.matchSoloRecord = this.matchSoloRecord.bind(this);
    this.searchRecord = this.searchRecord.bind(this);
  }

  componentDidMount() {
  }


  updateSearch = search => {
    this.setState({ search });
  };

  SoloMatch(){
    const {navigation} = this.props;
    const {name, usermatchinfo} = this.state;
    if (this.state.level == 'level') {
      Alert.alert(
        '오류',
        '소환사님의 정보가 없습니다',
        [
          {text: ' 확인 '}
        ],
        { cancelable: false }
      )
    }else {
      //Linking.openURL(`https://op.gg/summoner/${this.state.name}`)
      navigation.push('Match', {name: name, usermatch: usermatchinfo})
    }
  }


  async matchSoloRecord(){
    const usermatch = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490',}})
    let info = await usermatch.get(`/lol/match/v4/matchlists/by-account/${this.state.sumgameid}?endIndex=100`)
    this.setState({
      usermatchinfo: info.data.matches
    })
  }

  async searchRecord() {
    if (this.state.search == this.state.name) {
      Alert.alert(
        '오류',
        '중복된 소환사 명입니다.',
        [
          {text: '확인'}
        ],
        {cancelable: false}
      )
    }else {
    const userinfo = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490'}})
    let response = await userinfo.get('/lol/summoner/v4/summoners/by-name/'+ this.state.search)
    if(response.data.name != null){
      this.setState({
        name: response.data.name,
        level: response.data.summonerLevel,
        search: response.data.name,
        profileid: response.data.profileIconId,
        sumid: response.data.id,
        sumgameid: response.data.accountId,
      })
      this.matchSoloRecord()
       if (this.state.level > 29) { //랭크 전적 검색
         const userrecord = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490'}})
         let league = await userrecord.get('/lol/league/v4/entries/by-summoner/' + response.data.id)
         if (league.data[0] == null) {
           this.setState({
             solo_rank: '',
             solo_tier: 'Unrank',
             solowinloss: '배치고사',
             fr_rank:'',
             fr_tier: 'Unrank',
             frwinloss: '배치고사'
           })
         }else if (league.data[0] != null) {
           if (league.data[1] != null) {
             if (league.data[1].queueType == "RANKED_FLEX_SR") {
               this.setState({
                 fr_rank: league.data[1].rank,
                 fr_tier: league.data[1].tier,
                 frwinloss: `${league.data[1].wins} / ${league.data[1].losses}`
               })
             }else {
               this.setState({
                 fr_rank: league.data[0].rank,
                 fr_tier: league.data[0].tier,
                 frwinloss: `${league.data[0].wins} / ${league.data[0].losses}`
               })
             }
             if (league.data[1].queueType != "RANKED_SOLO_5x5") {
               this.setState({
                 solo_rank: league.data[0].rank,
                 solo_tier: league.data[0].tier,
                 solowinloss: `${league.data[0].wins} / ${league.data[0].losses}`
               })
             }else {
               this.setState({
                 solo_rank: league.data[1].rank,
                 solo_tier: league.data[1].tier,
                 solowinloss: `${league.data[1].wins} / ${league.data[1].losses}`
               })
             }
           }else {
             if (league.data[0].queueType == 'RANKED_SOLO_5x5') {
               this.setState({
                 solo_rank: league.data[0].rank,
                 solo_tier: league.data[0].tier,
                 solowinloss: `${league.data[0].wins} / ${league.data[0].losses}`,
                 fr_rank:'',
                 fr_tier: 'Unrank',
                 frwinloss: '배치고사'
               })
             }else {
               this.setState({
                 fr_rank: league.data[0].rank,
                 fr_tier: league.data[0].tier,
                 frwinloss: `${league.data[0].wins} / ${league.data[0].losses}`,
                 solo_rank: '',
                 solo_tier: 'Unrank',
                 solowinloss: '배치고사',
               })
             }
           }
         }
       }else {
         this.setState({
           solo_rank: '',
           solo_tier: 'Unrank',
           solowinloss: '조건 부족',
           fr_rank:'',
           fr_tier: 'Unrank',
           frwinloss: '조건 부족'
         })
      }//랭크 전적 검색 기능
    }else { //이름 매칭 후 없으면 경고창
      Alert.alert(
        '오류',
        '소환사님의 이름을 찾을 수 없습니다',
        [
          {text: ' 확인 '}
        ],
        { cancelable: false }
      )
      console.log('error, can not find anything ');
    }
  }

  }

  render() {
    const { search, solo_tier , fr_tier ,usermatchinfo } = this.state;

    let solo_tierImage;
    if (solo_tier == 'GOLD'){
      solo_tierImage = require('assets/images/GOLD.png')
    }else if (solo_tier == 'SILVER') {
      solo_tierImage = require('assets/images/SILVER.png')
    }else if (solo_tier == 'IRON') {
      solo_tierImage = require('assets/images/SILVER.png')
    }else if (solo_tier == 'BRONZE') {
      solo_tierImage = require('assets/images/BRONZE.png')
    }else if (solo_tier == 'PLATINUM') {
      solo_tierImage = require('assets/images/PLATINUM.png')
    }else if (solo_tier == 'DIAMOND') {
      solo_tierImage = require('assets/images/DIAMOND.png')
    }else if (solo_tier == 'MASTER' ) {
      solo_tierImage = require('assets/images/MASTER.png')
    }else if (solo_tier == 'GRANDMASTER') {
      solo_tierImage = require('assets/images/GRANDMASTER.png')
    }else if (solo_tier == 'CHALLENGER') {
      solo_tierImage = require('assets/images/CHALLENGER.png')
    }else {
      solo_tierImage = require('assets/images/Unranked.png')
    }

    let fr_tierImage;
    if (fr_tier == 'GOLD'){
      fr_tierImage = require('assets/images/GOLD.png')
    }else if (fr_tier == 'SILVER') {
      fr_tierImage = require('assets/images/SILVER.png')
    }else if (fr_tier == 'IRON') {
      fr_tierImage = require('assets/images/SILVER.png')
    }else if (fr_tier == 'BRONZE') {
      fr_tierImage = require('assets/images/BRONZE.png')
    }else if (fr_tier == 'PLATINUM') {
      fr_tierImage = require('assets/images/PLATINUM.png')
    }else if (fr_tier == 'DIAMOND') {
      fr_tierImage = require('assets/images/DIAMOND.png')
    }else if (fr_tier == 'MASTER' ) {
      fr_tierImage = require('assets/images/MASTER.png')
    }else if (fr_tier == 'GRANDMASTER') {
      fr_tierImage = require('assets/images/GRANDMASTER.png')
    }else if (fr_tier == 'CHALLENGER') {
      fr_tierImage = require('assets/images/CHALLENGER.png')
    }else {
      fr_tierImage = require('assets/images/Unranked.png')
    }
    const {navigation} = this.props;
    //const tierImage = fr_tier ? 'assets/images/GOLD.png' : null
    return(
      <SafeAreaView style={style.main}>

        <SearchBar
          style={{backgroundColor: 'black'}}
          onChangeText={this.updateSearch}
          value={search}
          placeholder="소환사명을 입력해주세요"
          cancelButtonTitle="Cancel"
        />
        <TouchableOpacity style={style.but} onPress={() => this.searchRecord() }>
          <Text style={{color: '#ffffff', left: 5}} >검색</Text>
        </TouchableOpacity>
          <View style={style.s}>
          <TouchableOpacity onPress={() => this.searchRecord()}>
            <Image
            style={{width: '20%', height: '20%',resizeMode: 'contain', padding: 75, bottom: 54, borderBottomRightRadius: 15}}
            source={{uri: 'http://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/' + this.state.profileid + '.png' }}/>
            <Text style={style.namefont}>{this.state.name}</Text>
            <Text style={style.levelfont}>{this.state.level}</Text>
          </TouchableOpacity>
          </View>
          <View style={style.tier}>
          <TouchableOpacity onPress={() => this.SoloMatch()}>
            <View style={style.solo}>
              <Image
                style={{width: '20%', height: '20%',resizeMode: 'contain', padding: 75}}
                source={solo_tierImage}/>
              <Text style={style.solofont}>{this.state.solo_tier}  {this.state.solo_rank}</Text>
              <Text style={style.solofont}>{this.state.solowinloss}</Text>
            </View>
            <View style={style.fr}>
                <Image
                  style={{width: '20%', height: '20%',resizeMode: 'contain', padding: 75}}
                  source={fr_tierImage}/>
                  <Text style={style.frfont}>{this.state.fr_tier}  {this.state.fr_rank}</Text>
                  <Text style={style.frfont}>{this.state.frwinloss}</Text>
            </View>
          </TouchableOpacity>
          </View>
            <Text></Text>

      </SafeAreaView>
    );
  }

}

const Stack = createStackNavigator();

class App  extends Component{
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = 'ios-search' style={{ color: tintColor }} />
    )
  }
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={GameRecord} />
          <Stack.Screen name="Match" component={Match} />
          <Stack.Screen name="Matchinfo" component={Matchinfo} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;

//export default GameRecord;

const style = StyleSheet.create({
  solo:{

  },
  tier:{
    bottom: 120
  },
  solofont:{
    fontSize: 15,
    left: 115,
    bottom:125,
    paddingLeft: 45
  },
  fr:{
    bottom: 40,
  },
  frfont:{
    fontSize: 15,
    left: 115,
    bottom:125,
    paddingLeft: 45
  },
  main:{
    flex: 1,
    backgroundColor: '#d9f3fa'
  },
  scroll:{
    //backgroundColor: '#d9f3fa',
  },
  namefont:{
    marginLeft: '50%',
    fontSize: 25,
    right: 40,
    bottom: 194
  },
  levelfont:{
    marginLeft: '50%',
    left: 10,
    fontSize: 18,
    bottom: 194
  },
  but:{
    borderRadius: 50,
    bottom:56,
    left: 170,
    marginHorizontal: 170,
    padding: 15,
    borderColor: '#ffffff' ,
    borderWidth: 1,
    backgroundColor: 'black'
  }
});
