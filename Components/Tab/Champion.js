import  React, { Component } from 'react';
import  { SafeAreaView ,View, Text, ActivityIndicator ,Button, StyleSheet, SectionList, FlatList, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import  { Icon, Thumbnail }  from 'native-base';
import {create} from 'apisauce';
import { Linking } from 'expo';

export const champions = [
  {
    champion: '가렌', id: 86,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte41a162aed9339b7/5db05fc60b39e86c2f83dc0d/RiotX_ChampionList_garen.jpg?quality=90&width=250',
    url: 'https://kr.leagueoflegends.com/ko-kr/champions/garen'
  },
  {
    champion: '갈리오', id: 3,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5890d1ab5c8be01f/5db05fc6823d426762825fe5/RiotX_ChampionList_galio.jpg?quality=90&width=250',
    url: 'https://kr.leagueoflegends.com/ko-kr/champions/galio'
  },
  {
    champion: '갱플랭크', id: 41,
    thumbnail:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfdff3781ccfb2a5c/5db05fc689fb926b491ed811/RiotX_ChampionList_gangplank.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/gangplank'
  },
  {
    champion: '그라가스', id: 79,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt795841adba722f85/5db05fc43a326d6df6c0e7b9/RiotX_ChampionList_gragas.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/gragas'
  },
  {
    champion: '그레이브즈', id: 104,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd8935c6b4025d320/5db05fc4bd24496c390ae4e4/RiotX_ChampionList_graves.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/graves'
  },
  {
    champion: '나르', id: 150,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta80f79dd96ee5d30/5db05fc6df78486c826dcd00/RiotX_ChampionList_gnar.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/gnar'
  },
  {
    champion: '나미', id: 267,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13bec39f49dc35ee/5db05fe956458c6b3fc1751f/RiotX_ChampionList_nami.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nami'
  },
  {
    champion: '나서스', id: 75,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20a4b154b1756b56/5db05fe7a6470d6ab91ce5a0/RiotX_ChampionList_nasus.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nasus'
  },
  {
    champion: '노틸러스', id: 111,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nautilus'
  },
  {
    champion: '녹턴', id: 56,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfc73e3c7dda28d31/5db05ff2adc8656c7d24e7f0/RiotX_ChampionList_nocturne.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nocturne'
  },
  {
    champion: '누누', id: 20,
    thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf613746635c6d3c8/5db05ff256458c6b3fc17527/RiotX_ChampionList_nunu.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nunu'
  },
  {
    champion: '니달리', id: 76, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5a2da06d413f7c15/5db05ff1df78486c826dcd18/RiotX_ChampionList_nidalee.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/nidalee'
  },
  {
    champion: '니코', id: 518, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta62eaac6ad26a4f5/5db05fe7adc8656c7d24e7ea/RiotX_ChampionList_neeko.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/neeko'
  },
  {
    champion: '다리우스', id: 122, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38b52be4a2cb1004/5db05fb19481396d6bdd01ac/RiotX_ChampionList_darius.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/darius'
  },
  {
    champion: '다이애나', id: 131, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt56570083d2a5e20e/5db05fbc823d426762825fdf/RiotX_ChampionList_diana.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/diana'
  },
  {
    champion: '드레이븐', id: 119, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0be728e4cbb8f2a/5db05fbc89fb926b491ed80b/RiotX_ChampionList_draven.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/draven'
  },
  {
    champion: '라이즈', id: 13, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8af977ce4fa7804b/5db05ffa2dc72966da746714/RiotX_ChampionList_ryze.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ryze'
  },
  {
    champion: '라칸', id: 497, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbe844b30961ccb7c/5db05ffb2140ec675d68f4ad/RiotX_ChampionList_rakan.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/rakan'
  },
  {
    champion: '람머스', id: 33, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt50cccb68a58349f5/5db05ffbdc674266df3d5d48/RiotX_ChampionList_rammus.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/rammus'
  },
  {
    champion: '럭스', id: 99, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb94b4161d8022c45/5db05fdfe9d7526ab429e53c/RiotX_ChampionList_lux.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/lux'
  },
  {
    champion: '럼블', id: 68, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7c76610fa29d8d6/5db05ffa7d28b76cfe439813/RiotX_ChampionList_rumble.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/rumble'
  },
  {
    champion: '레넥톤', id: 58, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b5bb4d917759184/5db05ffb242f426df132f979/RiotX_ChampionList_renekton.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/renekton'
  },
  {
    champion: '레오나', id: 89, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8d46ada03ea1da8c/5db05fdf347d1c6baa57be31/RiotX_ChampionList_leona.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/leona'
  },
  {
    champion: '렉사이', id: 421, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4affff3ef114e99b/5db05ffb347d1c6baa57be43/RiotX_ChampionList_reksai.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/rek-sai'
  },
  {
    champion: '렝가', id: 107, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt282bc8e033db4123/5db05ff9adc8656c7d24e7f6/RiotX_ChampionList_rengar.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/rengar'
  },
  {
    champion: '루시안', id: 236, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3db0d62352b0b4f1/5db05fdf6e8b0c6d038c5cb4/RiotX_ChampionList_lucian.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/lucian'
  },
  {
    champion: '룰루', id: 117, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt424f04814efb3aca/5db05fdfe9d7526ab429e538/RiotX_ChampionList_lulu.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/lulu'
  },
  {
    champion: '르블랑', id: 7, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4aaf881bb90b509f/5db05fde6e8b0c6d038c5cae/RiotX_ChampionList_leblanc.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/leblanc'
  },
  {
    champion: '리 신', id: 64, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt075d278529811445/5db05fde6af83b6d7032c8fe/RiotX_ChampionList_leesin.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/lee-sin'
  },
  {
    champion: '리븐', id: 92, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3925b81c7462e26e/5db05ffadc674266df3d5d42/RiotX_ChampionList_riven.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/riven'
  },
  {
    champion: '리산드라', id: 127, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt08f869e897566c5b/5db05fdf7d28b76cfe439801/RiotX_ChampionList_lissandra.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/lissandra'
  },
  {
    champion: '마스터 이', id: 11, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt46e861d7e6c0ab0c/5db05fe8df78486c826dcd12/RiotX_ChampionList_masteryi.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/master-yi'
  },
  {
    champion: '마오카이', id: 57, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt757d0e8855d51e03/5db05fe72140ec675d68f4a1/RiotX_ChampionList_maokai.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/maokai'
  },
  {
    champion: '말자하', id: 90, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd58a3a2bf5035834/5db05fde0b39e86c2f83dc1f/RiotX_ChampionList_malzahar.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/malzahar'
  },
  {
    champion: '말파이트', id: 54, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4d3b4a7e4c44ced7/5db05fdeadc8656c7d24e7e2/RiotX_ChampionList_malaphite.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/malphite'
  },
  {
    champion: '모데카이저', id: 82, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2392a60ff2a2d726/5db05fe8242f426df132f96d/RiotX_ChampionList_mordekaiser.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/mordekaiser'
  },
  {
    champion: '모르가나', id: 25, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/morgana'
  },
  {
    champion: '문도 박사', id: 36, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte88a3d7e9e408904/5db05fbce9effa6ba5295f99/RiotX_ChampionList_drmundo.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/dr-mundo'
  },
  {
    champion: '미스 포춘', id: 21, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf36fa7fd7ecb59fb/5db05fe89481396d6bdd01b8/RiotX_ChampionList_missfortune.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/miss-fortune'
  },
  {
    champion: '바드', id: 432, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbe3ce0c0ae1305b/5db05fb23a326d6df6c0e7b3/RiotX_ChampionList_bard.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/bard'
  },
  {
    champion: '바루스', id: 110, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt596158d85a8360d1/5db060132dc72966da74671a/RiotX_ChampionList_varus.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/varus'
  },
  {
    champion: '바이', id: 254, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3bd79abf330fc807/5db06014dc674266df3d5d56/RiotX_ChampionList_vi.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/vi'
  },
  {
    champion: '베이가', id: 45, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltda2b568b0c3e5847/5db06014e9effa6ba5295fb9/RiotX_ChampionList_veigar.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/veigar'
  },
  {
    champion: '베인', id: 67, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9eaabc908956c8b0/5db060146af83b6d7032c90a/RiotX_ChampionList_vayne.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/vayne'
  },
  {
    champion: '벨코즈', id: 161, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt825d0c333f6e74ae/5db060142140ec675d68f4bb/RiotX_ChampionList_velkoz.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/vel-koz'
  },
  {
    champion: '볼리베어', id: 106, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt41447a436267de03/5db0601d6e8b0c6d038c5cc0/RiotX_ChampionList_volibear.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/volibear'
  },
  {
    champion: '브라움', id: 201, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd140e30fa86d6ddd/5db05fb2242f426df132f95d/RiotX_ChampionList_braum.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/braum'
  },
  {
    champion: '브렌드', id: 63, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc8ca2e9bba653dda/5db05fb2dc674266df3d5d30/RiotX_ChampionList_brand.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/brand'
  },
  {
    champion: '블라디미르', id: 8, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39ab5027f6fa1b81/5db0601589fb926b491ed82f/RiotX_ChampionList_vladimir.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/vladimir'
  },
  {
    champion: '블리츠크랭크', id: 53, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7ef7e56ce1fe17b/5db05fb26af83b6d7032c8f8/RiotX_ChampionList_blitzcrank.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/blitzcrank'
  },
  {
    champion: '빅토르', id: 112, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6e54b3de49b7bbf3/5db06015df78486c826dcd1e/RiotX_ChampionList_viktor.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/viktor'
  },
  {
    champion: '뽀삐', id: 78, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0df0f7bcaf851737/5db05ff1242f426df132f973/RiotX_ChampionList_poppy.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/poppy'
  },
  {
    champion: '사이온', id: 14, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7f28f1d689e4ad3d/5db06004adc8656c7d24e802/RiotX_ChampionList_sion.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sion'
  },
  {
    champion: '사일러스', id: 517, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf8ea29aa48fc5e35/5db0600cadc8656c7d24e808/RiotX_ChampionList_sylas.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sylas'
  },
  {
    champion: '샤코', id: 35, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc8b1d1ba926d01cc/5db060036e8b0c6d038c5cba/RiotX_ChampionList_shaco.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/shaco'
  },
  {
    champion: '세나', id: 235, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt24f4735ebde3c22b/5db08d642dc72966da74686e/RiotX_ChampionList_senna.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/senna'
  },
  {
    champion: '세주아니', id: 113, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte4d521b893aa5a3e/5db05ffae9d7526ab429e544/RiotX_ChampionList_sejuani.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sejuani'
  },
  {
    champion: '세트', id: 875, thumbnail: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sett'
  },
  {
    champion: '소나', id: 37, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4810827f74fc21b9/5db06003347d1c6baa57be49/RiotX_ChampionList_sona.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sona'
  },
  {
    champion: '소라카', id: 16, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2141839fdc483592/5db06003e9effa6ba5295fad/RiotX_ChampionList_soraka.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/soraka'
  },
  {
    champion: '쉔', id: 98, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd142d174831b78e9/5db06004242f426df132f97f/RiotX_ChampionList_shen.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/shen'
  },
  {
    champion: '쉬바나', id: 102, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdb320ec49e0e02a7/5db0600456458c6b3fc1752d/RiotX_ChampionList_shyvana.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/shyvana'
  },
  {
    champion: '스웨인', id: 50, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1a64e469280b8b9f/5db060030b39e86c2f83dc25/RiotX_ChampionList_swain.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/swain'
  },
  {
    champion: '스카너', id: 72, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt842a8149ba8b7a3d/5db06003bd24496c390ae4f6/RiotX_ChampionList_skarner.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/skarner'
  },
  {
    champion: '시비르', id: 15, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbe8ea8bfd98ec1f3/5db06002a6470d6ab91ce5ac/RiotX_ChampionList_sivir.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/sivir'
  },
  {
    champion: '신 짜오', id: 5, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltca4486a1630ef517/5db0601ce9d7526ab429e54a/RiotX_ChampionList_xinzhao.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/xin-zhao/'
  },
  {
    champion: '신드라', id: 134, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd9308eedab3a6fa5/5db0600c3a326d6df6c0e7bf/RiotX_ChampionList_syndra.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/syndra'
  },
  {
    champion: '신지드', id: 27, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt766d98c27adfde28/5db06004347d1c6baa57be4f/RiotX_ChampionList_singed.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/singed'
  },
  {
    champion: '쓰레쉬', id: 412, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt46555de3bfa94d44/5db0600b2140ec675d68f4b5/RiotX_ChampionList_thresh.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/thresh'
  },
  {
    champion: '아리', id: 103, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ahri'
  },
  {
    champion: '아무무', id: 32, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt40dfbe48a61c439f/5db05fa80b39e86c2f83dbf9/RiotX_ChampionList_amumu.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/amumu'
  },
  {
    champion: '아우렐리온 솔', id: 136, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5dd3569fc67d6664/5db05fa8bd24496c390ae4d8/RiotX_ChampionList_aurelionsol.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/aurelion-sol/'
  },
  {
    champion: '아이번', id: 427, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5fff73e1df1873de/5db05fce7d28b76cfe4397f5/RiotX_ChampionList_ivern.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ivern'
  },
  {
    champion: '아지르', id: 268, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e3f847946232167/5db05fa889fb926b491ed7ff/RiotX_ChampionList_azir.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/azir'
  },
  {
    champion: '아칼리', id: 84, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/akali'
  },
  {
    champion: '아트록스', id: 266, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/aatrox'
  },
  {
    champion: '아펠리오스', id: 523, thumbnail: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/aphelios'
  },
  {
    champion: '알리스타', id: 12, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b366925d2fd8fdb/5db05fa856458c6b3fc1750b/RiotX_ChampionList_alistar.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/alistar'
  },
  {
    champion: '애니', id: 1, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt28c708665427aef6/5db05fa89481396d6bdd01a6/RiotX_ChampionList_annie.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/annie'
  },
  {
    champion: '애니비아', id: 34, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d24a1482453088a/5db05fa8df78486c826dcce8/RiotX_ChampionList_anivia.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/anivia'
  },
  {
    champion: '애쉬', id: 22, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt943aae038e2dee98/5db05fa8e9effa6ba5295f91/RiotX_ChampionList_ashe.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ashe'
  },
  {
    champion: '야스오', id: 157, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/yasuo'
  },
  {
    champion: '에코', id: 245, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf22ba7e6328e4376/5db05fbd242f426df132f963/RiotX_ChampionList_ekko.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ekko'
  },
  {
    champion: '엘리스', id: 60, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfe21ff2ddb84d5d1/5db05fbd0b39e86c2f83dc05/RiotX_ChampionList_elise.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/elise'
  },
  {
    champion: '오공', id: 62, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf44673e1a16af30/5db05fe87d28b76cfe439807/RiotX_ChampionList_monkeyking.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/wukong'
  },
  {
    champion: '오른', id: 516, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt639bacdfe8b1fd95/5db05ff1bd24496c390ae4f0/RiotX_ChampionList_ornn.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ornn'
  },
  {
    champion: '오리아나', id: 61, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3318fc0e8103706d/5db05ff02140ec675d68f4a7/RiotX_ChampionList_orianna.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/orianna'
  },
  {
    champion: '올라프', id: 2, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte922bda45062964b/5db05ff0a6470d6ab91ce5a6/RiotX_ChampionList_olaf.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/olaf'
  },
  {
    champion: '요릭', id: 83, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570d89dd9a76ba08/5db0601c823d426762825ff9/RiotX_ChampionList_yorick.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/yorick'
  },
    {
    champion: '우디르', id: 77, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8350eda62a9ed56c/5db060150b39e86c2f83dc2b/RiotX_ChampionList_udyr.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/udyr'
  },
  {
    champion: '우르곳', id: 6, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt162b78ba3ece1d4f/5db060157d28b76cfe43981b/RiotX_ChampionList_urgot.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/urgot'
  },
  {
    champion: '워윅', id: 19, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt08a92f3897cfc8f5/5db0601ddc674266df3d5d5c/RiotX_ChampionList_warwick.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/warwick'
  },
  {
    champion: '유미', id: 350, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta312e7cca0e594d1/5db0601d2140ec675d68f4c1/RiotX_ChampionList_yuumi.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/yuumi'
  },
  {
    champion: '이렐리아', id: 39, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/irelia'
  },
  {
    champion: '이블린', id: 28, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte24b4c6ec1beebb9/5db05fbddf78486c826dccf4/RiotX_ChampionList_evelynn.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/evelynn'
  },
  {
    champion: '이즈리얼', id: 81, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f687c95425f73f/5db05fbd2dc72966da746704/RiotX_ChampionList_ezreal.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ezreal'
  },
  {
    champion: '일라오이', id: 420, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc44e90a5547120a2/5db05fc5347d1c6baa57be2b/RiotX_ChampionList_illaoi.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/illaoi'
  },
  {
    champion: '자르반 4세', id: 59, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5898626d7016d222/5db05fcfdc674266df3d5d3c/RiotX_ChampionList_jarvaniv.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/jarvan-iv'
  },
  {
    champion: '자야', id: 498, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0d029ccdb18a4299/5db0601ba6470d6ab91ce5be/RiotX_ChampionList_xayah.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/xayah'
  },
  {
    champion: '자이라', id: 143, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9bc3497cdd04f6d5/5db060229481396d6bdd01c4/RiotX_ChampionList_zyra.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/zyra'
  },
  {
    champion: '자크', id: 154, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9412083c2b98b9c8/5db0601d6af83b6d7032c910/RiotX_ChampionList_zac.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/zac'
  },
  {
    champion: '잔나', id: 40, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt02bf5329f8abe45d/5db05fcedf78486c826dcd06/RiotX_ChampionList_janna.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/janna'
  },
  {
    champion: '잭스', id: 24, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b301613598c3f17/5db05fcf89fb926b491ed81d/RiotX_ChampionList_jax.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/jax'
  },
  {
    champion: '제드', id: 238, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt402d6da485218720/5db0601de9effa6ba5295fc5/RiotX_ChampionList_zed.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/zed'
  },
  {
    champion: '제라스', id: 101, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbda694c8890e94e5/5db0601ce9effa6ba5295fbf/RiotX_ChampionList_xeratth.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/xeratth'
  },
  {
    champion: '제이스', id: 126, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt51557edc36ad88a1/5db05fcf0b39e86c2f83dc13/RiotX_ChampionList_jayce.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/jayce'
  },
  {
    champion: '조이', id: 142, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd18587f31803441d/5db060226e8b0c6d038c5cc6/RiotX_ChampionList_zoe.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/zoe'
  },
  {
    champion: '직스', id: 115, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f8c12d54d8ecd28/5db0602289fb926b491ed835/RiotX_ChampionList_ziggs.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/ziggs'
  },
  {
    champion: '진', id: 202, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/jhin'
  },
  {
    champion: '질리언', id: 26, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta32de59397f53325/5db060222dc72966da746720/RiotX_ChampionList_zilean.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/zilean'
  },
  {
    champion: '징크스', id: 222, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta2cba784d9fad4b8/5db05fce89fb926b491ed817/RiotX_ChampionList_jinx.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/jinx'
  },
  {
    champion: '초가스', id: 31, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4dfb71de3ddc8166/5db05fb13a326d6df6c0e7ad/RiotX_ChampionList_chogath.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/cho-gath/'
  },
  {
    champion: '카르마', id: 43, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39748c7b67252d6f/5db05fd70b39e86c2f83dc19/RiotX_ChampionList_karma.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/karma'
  },
  {
    champion: '카밀', id: 164, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt413fcd7681fe0773/5db05fb089fb926b491ed805/RiotX_ChampionList_camille.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/camille/'
  },
  {
    champion: '카사딘', id: 38, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20773f2f67e00a74/5db05fd7bd24496c390ae4ea/RiotX_ChampionList_kassadin.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kassadin'
  },
  {
    champion: '카서스', id: 30, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt69b8fad9d1e78514/5db05fd7df78486c826dcd0c/RiotX_ChampionList_karthus.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/karthus'
  },
  {
    champion: '카시오페아', id: 69, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte189be8189da97ea/5db05fb1bd24496c390ae4de/RiotX_ChampionList_cassiopeia.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/cassiopeia'
  },
  {
    champion: '카이사', id: 145, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte38dc660dfe79204/5db05fce2dc72966da74670c/RiotX_ChampionList_kaisa.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kai-sa'
  },
  {
    champion: '카직스', id: 121, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt363d7d62846ffc87/5db05fd6e9effa6ba5295f9f/RiotX_ChampionList_khazix.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kha-zix'
  },
  {
    champion: '카타리나', id: 55, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb73e3edb5937676a/5db05fd7823d426762825feb/RiotX_ChampionList_katarina.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/katarina'
  },
  {
    champion: '칼리스타', id: 429, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb7f0196921c74e8c/5db05fcee9d7526ab429e52c/RiotX_ChampionList_kalista.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kalista'
  },
  {
    champion: '케넨', id: 85, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc87932e656d1076e/5db05fd6adc8656c7d24e7dc/RiotX_ChampionList_kennen.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kennen'
  },
  {
    champion: '케이틀린', id: 51, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt014f4b6fc9bacd10/5db05fb00b39e86c2f83dbff/RiotX_ChampionList_caitlyn.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/caitlyn'
  },
  {
    champion: '케인', id: 141, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt64edf2d3729b57c1/5db05fd656458c6b3fc17519/RiotX_ChampionList_kayn.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kayn'
  },
  {
    champion: '케일', id: 10, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2c7675893b5c76bc/5db05fd77d28b76cfe4397fb/RiotX_ChampionList_kayle.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kayle'
  },
  {
    champion: '코그모', id: 96, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf483c8f812369fa/5db05fde823d426762825ff1/RiotX_ChampionList_kogmaw.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kog-maw'
  },
  {
    champion: '코르키', id: 42, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd918c4d0a86347a/5db05fb1df78486c826dccee/RiotX_ChampionList_corki.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/corki'
  },
  {
    champion: '퀸', id: 133, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5cc3e3a189961d90/5db05ffbadc8656c7d24e7fc/RiotX_ChampionList_quinn.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/quinn'
  },
  {
    champion: '클레드', id: 240, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1670a0dd8fd5edca/5db05fd66e8b0c6d038c5ca8/RiotX_ChampionList_kled.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kled'
  },
  {
    champion: '키아나', id: 246, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta6148d8dca105d6b/5db05ff1e9effa6ba5295fa7/RiotX_ChampionList_qiyana.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/qiyana'
  },
  {
    champion: '킨드레드', id: 203, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc0f0007660b7a07b/5db05fd689fb926b491ed823/RiotX_ChampionList_kindred.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/kindred'
  },
  {
    champion: '타릭', id: 44, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6b2d37773c3621e1/5db0600d347d1c6baa57be55/RiotX_ChampionList_taric.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/taric'
  },
  {
    champion: '탈론', id: 91, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt20a737f99ebcd027/5db0600c89fb926b491ed829/RiotX_ChampionList_talon.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/talon'
  },
  {
    champion: '탈리야', id: 163, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt35c3537198ee86b9/5db05fc52140ec675d68f49b/RiotX_ChampionList_ialiyah.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/taliyah'
  },
  {
    champion: '탐켄치', id: 223, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt87be9cf38f3bc986/5db0600c56458c6b3fc17533/RiotX_ChampionList_tahmkench.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/tahm-kench'
  },
  {
    champion: '트런들', id: 48, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt05eb0518bbe963c0/5db0600ba6470d6ab91ce5b2/RiotX_ChampionList_trundle.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/trundle'
  },
  {
    champion: '트리스타나', id: 18, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfbbc3205edf5207a/5db0600bdc674266df3d5d50/RiotX_ChampionList_tristana.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/tristana'
  },
  {
    champion: '트린다미어', id: 23, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b217144ed3a7faa/5db08d643a326d6df6c0e907/RiotX_ChampionList_tryndamere.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/tryndamere'
  },
  {
    champion: '트위스티드 페이트', id: 4, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaebcdb8b21d440a7/5db0600ce9effa6ba5295fb3/RiotX_ChampionList_twistedfate.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/twisted-fate'
  },
  {
    champion: '트위치', id: 29, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt674dca7d5611ebb0/5db060159481396d6bdd01be/RiotX_ChampionList_twitch.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/twitch'
  },
  {
    champion: '티모', id: 17, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt30ddbbdc0549078a/5db0600da6470d6ab91ce5b8/RiotX_ChampionList_teemo.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/teemo'
  },
  {
    champion: '파이크', id: 555, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt98269cb73e9fce70/5db05ff1347d1c6baa57be3d/RiotX_ChampionList_pyke.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/pyke'
  },
  {
    champion: '판테온', id: 80, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3f84c538bd36ef02/5db05ff17d28b76cfe43980d/RiotX_ChampionList_pantheon.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/pantheon'
  },
  {
    champion: '피들스틱', id: 9, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1151ac1242311053/5db05fbca6470d6ab91ce594/RiotX_ChampionList_fiddlesticks.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/fiddlesticks'
  },
  {
    champion: '피오라', id: 114, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt935dd149b2617ac8/5db05fbcdc674266df3d5d36/RiotX_ChampionList_fiora.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/fiora'
  },
  {
    champion: '피즈', id: 105, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6000fa69e03c25c0/5db05fbc56458c6b3fc17513/RiotX_ChampionList_fizz.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/fizz'
  },
  {
    champion: '하이머딩거', id: 74, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd30d85446d154070/5db05fc57d28b76cfe4397ef/RiotX_ChampionList_heimerdinger.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/heimerdinger'
  },
  {
    champion: '헤카림', id: 120, thumbnail: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteb9ce5304ec48e19/5db05fc5df78486c826dccfa/RiotX_ChampionList_hecarim.jpg?quality=90&width=250'
    ,url: 'https://kr.leagueoflegends.com/ko-kr/champions/hecarim'
  }
];

const numColumns = 4

export  default class Champion extends Component{
  constructor(props){
    super(props)
    this.state={
      loading : 0,
      freechamps: [],
      champions: champions.id
    }
  }

//아이콘
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = 'person' style={{ color: tintColor }} />
    )
  };//아이
  async rotations(){
    const freecham = create({baseURL: 'https://kr.api.riotgames.com/', headers: {'X-Riot-Token': 'RGAPI-d0b8c084-02ca-4a02-865d-d7839eae0490'}})
    let response = await freecham.get('/lol/platform/v3/champion-rotations')
    this.setState({
      freechamid: response.data.freeChampionIds
    })
    const free = this.state.freechamid
    const championids = champions.map(info => info['id'])
    for (var i = 0; i < free.length; i++) {
      for (var v = 0; v < championids.length; v++) {
        if (free[i] == championids[v]) {
          this.setState({freechamps : `${this.state.freechamps.concat(champions[v].champion)}, `, loading: 1})
        }
      }
    }
    Alert.alert('로테이션', `${this.state.freechamps}`)
  }

  componentDidMount(){
    this.rotations()
  }

//챔피언정보 움
  render(){
    if (this.state.loading == 0) {
      return (
        <View style={{flex:1, backgroundColor: '#d9f3fa', alignItems: 'center', justifyContent: 'center', }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )
    }
    return(
      <View>
        <FlatList
          data={champions}
          numColumns={numColumns}
          renderItem={({item})=>
            <Item name = {item.champion}
            Item url = {item.url}
            Item thumbnail = {item.thumbnail}/>
        }keyExtractor={item => item.champion}
        windowSize={5}
        />
      </View>
    );
  }//챔피언 정보 움김

}


class Item extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={style.container} >
      <TouchableOpacity onPress={()=> Linking.openURL(this.props.url)}>
      <Image
      style={{width: 90, height: 90, borderRadius: 100}}
      source={{uri: this.props.thumbnail}}
       />
      <Text style={style.text}>{this.props.name}</Text>
      </TouchableOpacity>
      </SafeAreaView>
    )
  }
}//챔피언 사진

//스타일
const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#d9f3fa',
  },
  image: {
  },
  text:{
    paddingTop: 10,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
