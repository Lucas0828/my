import  React, { Component } from 'react';
import  { View, Text, StyleSheet, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import { Icon } from 'native-base';
import {create} from 'apisauce'




export  default  class Rank extends Component{
  constructor(props){
    super(props);
    this.state={
      loading: '0',
      challengerRank: '',
      challengerRank1: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = 'ios-star' style={{ color: tintColor }} />
    )
  }

  async componentDidMount(){
    const challengerRank = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490'}})
    let response = await challengerRank.get('/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1')
    this.setState({
      challengerRank: response.data,
    })

    const challengerRank1 = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490'}})
    let response1 = await challengerRank1.get('/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=2')
    this.setState({
      challengerRank: this.state.challengerRank.concat(response1.data),
      loading: 1
    })
  }


  render(){
    if (this.state.loading == 0 ) {
      return(
        <View style={{flex:1, backgroundColor: '#d9f3fa', alignItems: 'center', justifyContent: 'center', }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )
    }
    return(
      <View>
        <FlatList
          data={this.state.challengerRank}
          renderItem={({item})=>
            <Item sumname = {item.summonerName}
            Item losses={item.losses}
            Item wins={item.wins}
            Item sumlp = {item.leaguePoints}/>
          }
          keyExtractor={item => item.summonerId}
          windowSize={5}
          >
        </FlatList>
      </View>
    );
  }

}
class Item extends Component{

  constructor(props){
    super(props);
    this.state={

    }
  }


  find(){
  }

  componentDidMount(){
  }

  render(){
    return(
      <SafeAreaView>
      <TouchableOpacity onPress={() => this.find()}>
      <View style={style.container} >
        <Text style={style.font}>{this.props.sumname}  Lp:{this.props.sumlp}</Text>
        <Text style={style.font}>승: {this.props.wins} 패: {this.props.losses}</Text>
      </View>
      </TouchableOpacity>
      </SafeAreaView>
    )
  }

}

const style = StyleSheet.create({
  container:{
  //  alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor:'#d9f3fa',
    borderColor: '#ffffff',
    //float: 'left',
  },
  font: {
    fontSize: 20,
    padding: 20,
  },
});
