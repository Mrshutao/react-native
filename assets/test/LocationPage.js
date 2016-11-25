import React, { Component } from 'react'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ListView,
  ScrollView,
  TouchableHighlight,
  Vibration
} from 'react-native'

const { width } = Dimensions.get('window')
import TopViewPage from '../common/TopViewPage';
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";
import ModalView from '../common/ModalView'

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
  componentWillUnmount(){
    RCTDeviceEventEmitter.emit("testEvent",this.state.lastPosition)
  }

  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="测试"
          navigator={this.props.navigator}
          showRight={false}/>
        <View style={{padding:14,backgroundColor:"#f4f4f4"}}>

            <Text>
              <Text>Initial position: </Text>
              {this.state.initialPosition}
            </Text>
            <Text>
              <Text>Current position: </Text>
              {this.state.lastPosition}
            </Text>
          </View>
      
  
      </View>
    )
  }
}

const styles = StyleSheet.create({


})