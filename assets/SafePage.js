import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native'

const { width } = Dimensions.get('window')
import {PullView} from 'react-native-pull';
import RefreshPage from './common/RefreshPage'
import TopViewPage from './common/TopViewPage'
import MsgPage from './common/MsgPage'
const ImgsView=[require("./../image/safe/safe1.png"),
                require("./../image/safe/safe2.png"),
                require("./../image/safe/safe3.png"),
                require("./../image/safe/safe4.png"),
                require("./../image/safe/safe5.png"),
                require("./../image/safe/safe6.png"),
                require("./../image/safe/safe7.png"),
                require("./../image/safe/safe8.png"),]
export default class SafePage extends Component {
  constructor(props){
    super(props);
   
    this.navigator=this.props.navigator;
 }

 _toMsg(){
  let self=this;
  self.navigator.push({
    component:MsgPage
    })
 }

  render () {
    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={false}
          headTxt="保险"
          funcRight={this._toMsg.bind(this)}
          navigator={this.navigator}
          showRight={true}/>
        <RefreshPage 
        ref={(ref)=>this.RefreshPage=ref} 
        content={<Content/>}
        Height={60}/>
      </View>
    )
  }
}

class Content extends Component{
    constructor(props){
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.testArr=[{"img":ImgsView[0],"title":"小米车险","subtitle":"全网底价 VIP理赔服务 免息分期","price":"40%的最高补贴"},
                    {"img":ImgsView[1],"title":"百万医疗险","subtitle":"突破社保 200万保额 100%报销","price":"112.00元/年起"},
                    {"img":ImgsView[2],"title":"综合意外险","subtitle":"全面覆盖日常生活、出行、运动","price":"9.90元/年起"},
                    {"img":ImgsView[3],"title":"小米大病保","subtitle":"70种疾病保障 50万保额 致青春","price":"27.50元/年起"},
                    {"img":ImgsView[4],"title":"儿童意外险","subtitle":"全面保障意外和走失 享受双重关爱","price":"30.00元/年起"},
                    {"img":ImgsView[5],"title":"小米少儿保","subtitle":"宝宝专享重疾保障 给孩子一件铠甲","price":"60.00元/年起"},
                    {"img":ImgsView[6],"title":"小米天气险","subtitle":"遭遇恶劣天气 领取现金补贴","price":"0.50元/日起"},
                    {"img":ImgsView[7],"title":"小米旅游险","subtitle":"环游境内境外 给你最好的保障","price":"5.00元/年起"},]
      this.state={  
        dataSource:[]
      }
 }

  componentDidMount(){
   this.setState({
    dataSource:this.testArr
   })
  }

  _renderRow(rowData){
    return(
      <TouchableOpacity activeOpacity={0.7} style={styles.items}>
        <Image source={rowData.img} style={styles.img}/>
        <View style={styles.content}>
          <View style={styles.left}>
            <Text style={{color:"#353535",fontSize:16}}>{rowData.title}</Text>
            <Text style={{color:"#8c8c8c",fontSize:14,marginTop:6}}>{rowData.subtitle}</Text>
          </View>
          <View style={styles.right}>
            <Text style={{color:"#ff7c67",fontSize:16}}>{rowData.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      )
  }

  render(){
    return(
      <ScrollView style={{flexDirection:"column",}}>
        <View style={{height:50,backgroundColor:"#fff",justifyContent:"center",paddingHorizontal:14}}>
          <Text style={{fontSize:16,color:"#353535"}}>精品推荐</Text>
        </View>

         <ListView
              contentContainerStyle={{ paddingBottom:5,}}
              dataSource={this.ds.cloneWithRows(this.state.dataSource)}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections={true}
              />
      </ScrollView>
      )
  }
 
}

const styles = StyleSheet.create({
  items:{
    backgroundColor:"#fff",
    flexDirection:"column",
    marginBottom:14
  },
  img:{
    width:width,
    height:160
  },
  content:{
    flex:1,
    paddingTop:14,
    paddingBottom:20,
    flexDirection:"row",
    paddingHorizontal:14,
    justifyContent:"space-between"
  },
  left:{
    flexDirection:"column",
    alignItems:"flex-start"
  },
  right:{
   
    justifyContent:"center",
    alignItems:"flex-end"
  }

})