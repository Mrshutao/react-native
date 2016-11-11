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
import TopViewPage from './common/TopViewPage'
var ReactNative = require('react-native');
export default class MsgPage extends Component {
  constructor(props){
    super(props);
    this.state={
       initialPosition: 'unknown',
       lastPosition: 'unknown',
      }
    }




  componentDidMount(){
  
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});  
    },{enableHighAccuracy: true});

  }


  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="测试"
          navigator={this.props.navigator}
          showRight={false}/>
        <View style={{flex:1,padding:14,backgroundColor:"#f4f4f4"}}>

            <Text>
              <Text style={styles.title}>Initial position: </Text>
              {this.state.initialPosition}
            </Text>
            <Text>
              <Text style={styles.title}>Current position: </Text>
              {this.state.lastPosition}
            </Text>
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