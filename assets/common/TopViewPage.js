'use strict';
import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

let {width,height}=Dimensions.get("window");

export default class RefreshPage extends Component {
  constructor(props){
    super(props);
    this.defaultImg=require('./img/msg.png');
    this.state={
     
    }
  }
  back(){
 
    this.props.navigator.pop()
  }

  componentWillMount(){
    if(this.props.rightImg){
      this.defaultImg=this.props.rightImg;
    }
  }

  render() {
    let leftView;
    let headView;
    let rightView;

    if(this.props.showLeft){
      leftView= <TouchableOpacity 
      activeOpacity={0.5}
      onPress={()=>this.back()}
        style={{flex:1,alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
        <Image source={require('./img/back.png')} style={{width:16,height:16,marginLeft:14}}/>
        <Text style={{fontSize:14,color:"#fddcdc",marginLeft:8}}>{this.props.leftTxt}</Text>
      </TouchableOpacity>
    }else{
      leftView=<View style={{flex:1}}/>
    }

    if(this.props.headTxt){
      headView=<View style={{flex:1,alignItems:"center",justifyContent:"center",}}>
           <Text style={{fontSize:14,color:"#fddcdc"}}>{this.props.headTxt}</Text>
          </View>
    }else{
      headView=<View style={{flex:1}}/>
    }

    if(this.props.showRight){
      rightView=
          <View style={{flex:1,alignItems:"flex-end",justifyContent:"center",}}>
             <TouchableOpacity
              onPress={()=>{this.props.funcRight()}}
                activeOpacity={0.5}
               style={{width:20,height:20,marginRight:14,justifyContent:"center",alignItems:"center"}}>
              <Image source={this.defaultImg} style={{width:20,height:20,}}/>
             </TouchableOpacity
             >
           
          </View>
    }else{
      rightView=<View style={{height:0}}/>
    }
    return (
      <View style={{height:60,backgroundColor:"#f55152",flexDirection:"row",paddingTop:20}}>

         
            {leftView}
            {headView}
            {rightView}


      </View>
    );
  }
}
