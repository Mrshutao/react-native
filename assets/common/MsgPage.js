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
import TopViewPage from './TopViewPage'

export default class MsgPage extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndex:1,
      tabCurrentStyle:{

        Wrap:[styles.wrapNormal,styles.wrapActive],

      }
    }
 }




  componentDidMount(){
    
  }

  _onPress(index){
    this.setState({
      currentIndex:index
    })
  }

  render () {
    var content;
    if(this.state.currentIndex==1){
      content=<View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <Image source={require("./img/msg_blank.png")} style={{width:60,height:60}}/>
            <Text style={{fontSize:16,color:"#999",marginTop:10}}>暂无新消息</Text>
          </View>
    }else{
      content=<View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <Image source={require("./img/msg_blank1.png")} style={{width:60,height:60}}/>
            <Text style={{fontSize:16,color:"#999",marginTop:10}}>空空如也</Text>
          </View>
    }

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="通知"
          navigator={this.props.navigator}
          showRight={false}/>
        <View style={{flex:1,padding:14,backgroundColor:"#f4f4f4"}}>
          <View style={styles.top}>
            <View style={{height:40,flexDirection:"row",borderWidth:0.5,borderColor:"#ddd"}}>
              <TouchableOpacity 
              activeOpacity={0.5}
              onPress={()=> this._onPress(1)}
              style={this.state.currentIndex==1?this.state.tabCurrentStyle.Wrap[1]:this.state.tabCurrentStyle.Wrap[0]}>
               
                <Text style={styles.tabTitle}>个人</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              activeOpacity={0.5}
              onPress={()=> this._onPress(0)}
              style={this.state.currentIndex==0?this.state.tabCurrentStyle.Wrap[1]:this.state.tabCurrentStyle.Wrap[0]}>
                  
                <Text style={styles.tabTitle}>平台</Text>
              </TouchableOpacity>
            </View>
          </View>

          {content}
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
 top:{
  height:80,
  borderBottomWidth:0.5,
  borderColor:"#ddd",
  justifyContent:"center"
 },
 wrapNormal:{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
 },
 wrapActive:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#ddd"
 },
 tabTitle:{
  fontSize:14,
  color:"#333"
 }


})