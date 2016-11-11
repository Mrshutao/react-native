import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'

const { width } = Dimensions.get('window')
import {PullView} from 'react-native-pull';
import RefreshPage from './common/RefreshPage'
import TopViewPage from './common/TopViewPage'
import MsgPage from './common/MsgPage'
import PersonDetailPage from './PersonDetailPage'
import TestPage from './TestPage'
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";

export default class MyPage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
    this.navigator=this.props.navigator;
 }

 _toMsg(){

  let self=this;
  self.navigator.push({
    component:MsgPage
    })
 }

 _toTestpage(){
   let self=this;
  self.navigator.push({
    component:TestPage
    })
 }

 _toPersonDetail(){
  let self=this;
  self.navigator.push({
    component:PersonDetailPage
    })
 }
  componentDidMount(){
   RCTDeviceEventEmitter.addListener("testEvent",(e)=>{alert(e)})
  }

  render () {
    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={false}
          headTxt="我的"
          funcRight={this._toMsg.bind(this)}
          navigator={this.navigator}
          showRight={true}/>
        <RefreshPage 
        ref={(ref)=>this.RefreshPage=ref} 
        content={<Content _toMsg={this._toMsg.bind(this)} 
                  _toPersonDetail={this._toPersonDetail.bind(this)}
                  _toTestpage={this._toTestpage.bind(this)}/>}
        Height={60}/>
      </View>
    )
  }
}

class Content extends Component{

  render(){
    return(
      <ScrollView  style={{flexDirection:"column"}}>
        <View style={{height:80,borderBottomWidth:0.2,borderColor:"#e5e5e5",backgroundColor:"#fff",flexDirection:"row",alignItems:"center"}}>
                <TouchableOpacity activeOpacity={.5}
                onPress={()=>this.props._toPersonDetail()}
                style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require("./../image/my/person.png")} style={{width:40,height:40,marginRight:10}}/>
                    <View style={{flex:1,alignItems:"flex-start",justifyContent:"center"}}>
                      <Text style={{fontSize:16,color:"#000"}}>舒涛</Text>
                      <Text style={{fontSize:14,color:"#7f7f7f"}}>账号:257345289</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{width:0.5,height:40,backgroundColor:"#e5e5e5"}}/>

                <TouchableOpacity  activeOpacity={0.5}
                onPress={()=>this.props._toTestpage()}
                style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <Image source={require("./../image/my/youhui.png")} style={{width:40,height:40,marginRight:10}}/>
                    <View style={{flex:1,alignItems:"flex-start",justifyContent:"center"}}>
                      <Text style={{fontSize:16,color:"#000"}}>优惠券</Text>
                      <Text style={{fontSize:14,color:"#7f7f7f"}}>共有1张优惠券</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.items}>
                <View style={styles.items_title}>
                  <Image source={require('./../image/my/pig-icon.png')} style={{width:20,height:20}}/>
                  <Text style={{color:"#ffa626",fontSize:14,marginLeft:5}}>理财</Text>
                </View>

                <TouchableOpacity  activeOpacity={0.5} style={styles.items_content}>
                  <View style={styles.items_content_left}>
                    <View style={styles.items_content_top}>
                      <Text style={{color:"#ffa626",fontSize:30}}>25.35</Text>
                      <Text style={{color:"#666",fontSize:14}}>今日到账收益(元)</Text>
                    </View>

                    <View style={styles.items_content_bot}>
                      <Text style={{color:"#666",fontSize:18}}>0.00</Text>
                      <Text style={{color:"#666",fontSize:14}}>总资产(元)</Text>
                    </View>
                  </View>

                  <View style={styles.items_content_right}>
                    <Image source={require('./common/img/right_icon.png')} style={{width:20,height:20}}/>
                  </View>
                </TouchableOpacity>

                <View style={styles.items_bottom}>
                  <TouchableOpacity style={styles.items_bottom_wrap}>
                    <Image source={require('./../image/my/cards.png')} style={{width:20,height:20}}/>
                    <Text style={{color:"#000",fontSize:14,marginLeft:5}}>银行卡</Text>
                  </TouchableOpacity>

                  <View style={{width:0.6,height:24,backgroundColor:"#e5e5e5"}}/>

                   <TouchableOpacity style={styles.items_bottom_wrap}>
                    <Image source={require('./../image/my/time.png')} style={{width:20,height:20}}/>
                    <Text style={{color:"#000",fontSize:14,marginLeft:5}}>定投</Text>
                  </TouchableOpacity>

                  <View style={{width:0.6,height:24,backgroundColor:"#e5e5e5"}}/>

                   <TouchableOpacity style={styles.items_bottom_wrap}>
                    <Image source={require('./../image/my/records.png')} style={{width:20,height:20}}/>
                    <Text style={{color:"#000",fontSize:14,marginLeft:5}}>历史记录</Text>
                  </TouchableOpacity>
                </View>

              </View>

               <View style={styles.items}>
                <View style={styles.items_title}>
                  <Image source={require('./../image/my/loan.png')} style={{width:20,height:20}}/>
                  <Text style={{color:"#4fa5f1",fontSize:14,marginLeft:5}}>贷款</Text>
                </View>

                <TouchableOpacity  activeOpacity={0.5} style={styles.items_content}>
                  <View style={styles.items_content_left}>
                    <View style={styles.items_content_top}>
                      <Text style={{color:"#4fa5f1",fontSize:24}}>查看额度</Text>
                    </View>

                  </View>

                  <View style={styles.items_content_right}>
                    <Image source={require('./common/img/right_icon.png')} style={{width:20,height:20}}/>
                  </View>
                </TouchableOpacity>
              </View>

               <View style={styles.items}>
                <View style={styles.items_title}>
                  <Image source={require('./../image/my/baoxian.png')} style={{width:20,height:20}}/>
                  <Text style={{color:"#3fb88c",fontSize:14,marginLeft:5}}>保险</Text>
                </View>

                <TouchableOpacity  activeOpacity={0.5} style={styles.items_content}>
                  <View style={styles.items_content_left}>
                    <View style={styles.items_content_top}>
                      <Text style={{color:"#3fb88c",fontSize:30}}>0.00</Text>
                      <Text style={{color:"#666",fontSize:14}}>已购保险(份)</Text>
                    </View>

                  </View>

                  <View style={styles.items_content_right}>
                    <Image source={require('./common/img/right_icon.png')} style={{width:20,height:20}}/>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",justifyContent:"center",height:80}}>
              <Text style={{fontSize:14,color:"#c6c6c6"}}>————菜鸟出品————</Text>
            </View>
         </ScrollView>
      )
  }
 
}

const styles = StyleSheet.create({
  items:{
    borderTopWidth:0.2,
    borderBottomWidth:0.2,
    borderColor:"#e5e5e5",
    backgroundColor:"#fff",
    flexDirection:"column",
    justifyContent:"center",
    paddingHorizontal:20,
    marginTop:15
  },
  items_title:{
    flex:1,
    height:40,
    borderBottomWidth:0.2,
    borderColor:"#e5e5e5",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
  },
  items_content:{
    flexDirection:"row",
    paddingVertical:14
  },
  items_content_left:{
    flexDirection:"column",
    flex:2,
  },
  items_content_right:{
    flex:1,
    alignItems:"flex-end",
    justifyContent:"center"
  },
  items_content_top:{
    flexDirection:"column",

  },
  items_content_bot:{
   marginTop:10,
   flexDirection:"column",
  },
  items_bottom:{
    flex:1,
    height:40,
    borderTopWidth:0.2,
    borderColor:"#e5e5e5",
    flexDirection:"row",
    alignItems:"center",
  },
  items_bottom_wrap:{
    flexDirection:"row",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

})