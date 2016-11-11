import React, { Component } from 'react'
import ReactNative, {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
import TopViewPage from './common/TopViewPage'
import MsgPage from './common/MsgPage'
import ModalView from './common/ModalView'

export default class LoanPage extends Component {
  constructor(props){
    super(props);
    this.selectedImg=require("./../image/loan/selected.png");
    this.unselectedImg=require("./../image/loan/unselected.png");
    this.advertiseImg=require("./../image/loan/advertise.png");
    this.navigator=this.props.navigator;
    this.state={
      isSelected:true
    }
  }

  _toMsg(){
    let self=this;
    self.navigator.push({
      component:MsgPage
      })
  }

  activate(){
    this.ModalView.open(true,this._callBack)
     
  }

  _callBack(){
    ReactNative.ToastAndroid.show("激活成功！",ReactNative.ToastAndroid.SHORT);
  }
  
  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8"}}>
          <TopViewPage ref={(ref)=>this.TopViewPage=ref}
            showLeft={false}
            headTxt="贷款"
            funcRight={this._toMsg.bind(this)}
            showRight={true}/>
          <View style={{backgroundColor:"#fff",padding:20,borderBottomWidth:0.2,borderColor:"#e5e5e5"}}>
            <Text style={{color:"#4fa5f1",fontSize:24,marginBottom:50}}>您的信用,价值千金</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.setState({isSelected:!this.state.isSelected})}}>
                <Image source={this.state.isSelected?this.selectedImg:this.unselectedImg} style={{width:20,height:20}}/>
              </TouchableOpacity>
              <Text style={{fontSize:12,color:"#7f7f7f",marginLeft:8}}>我已阅读并同意</Text>
              <Text style={{fontSize:12,color:"#4fa5f1",}}>{"《小米金融用户隐私协议》"}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} disabled={!this.state.isSelected}
              onPress={()=>this.activate()} 
              style={{height:40,backgroundColor:this.state.isSelected?"#4fa5f1":"#a7d2f8",
                      borderRadius:3,alignItems:"center",justifyContent:"center",marginTop:8}}>
              <Text style={{fontSize:14,color:this.state.isSelected?"#fff":"#d3e8fb"}}>激活额度</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical:10,backgroundColor:"#fff"}}>
            <Image source={this.advertiseImg} style={{width:width,height:100}} resizeMode="stretch"/>
          </View>

          <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",backgroundColor:"#fff"}}>
            <View style={{flex:2,flexDirection:"column"}}>
              <Text style={{fontSize:16,color:"#333"}}>小米信用分</Text>
              <Text style={{fontSize:30,color:"#4fa5f1"}}>660</Text>
              <Text style={{fontSize:14,color:"#7f7f7f"}}>多使用小米服务，提升信用分</Text>
            </View>
            <View style={{flex:1,alignItems:"flex-end",justifyContent:"center"}}>
              <Image source={require('./common/img/right_icon.png')} style={{width:20,height:20}}/>
            </View>
          </TouchableOpacity>

          <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            <Text style={{fontSize:14,color:"#c6c6c6"}}>————菜鸟出品————</Text>
          </View>

          <ModalView ref={(ref)=>this.ModalView=ref}
            warnTitle="激活额度"
            warnText="确定要激活额度吗？" 
            type={true}
            confir="激活"
            contentAlign="center" />     
      </View>
    )
  }
}


const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"rgba(0,0,0,.2)" ,
    alignItems:"center",
    height:160
  },

  text: {
    color: '#fff',
    fontSize: 14,
  },

  image: {
    width,
    height:160
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}
