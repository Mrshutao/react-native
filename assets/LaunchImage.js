/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative,{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NativeModules,
  ToastAndroid
} from 'react-native';

import Index from "./Index"

let {width,height}=Dimensions.get("window");

export default class myProject extends Component {
  constructor(props){
    super(props);
    this.navigator=this.props.navigator;
    this.state={

    }
  }
  componentDidMount(){
    ReactNative.BackAndroid.addEventListener('hardwareBackPress', this.handleBack.bind(this))
    this.timer = setTimeout(() =>
         this.props.navigator.replace({component:Index}),2000)
  }

  handleBack(){
    
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }
     else if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {    
      
      return false
     }
    this.lastBackPressed = Date.now();
   ReactNative.ToastAndroid.show("再按一次退出应用",ReactNative.ToastAndroid.SHORT);
    return true;
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./../image/basic/bg.jpg")} style={{width:width,height:height,justifyContent:"center"}} resizeMode="stretch"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
