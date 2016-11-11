/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative,{
  AppRegistry,
  Navigator,
  StatusBar,
  View,
} from 'react-native';

import LaunchImage from "./assets/LaunchImage"

class Project extends Component {

  render() {
    return (
      <View style={{flex:1}}>

    <StatusBar
     backgroundColor="#e3493d"
     translucent={true}/>


     <Navigator
      initialRoute={{name:"启动页",component:LaunchImage}}
      configureScene={()=>
          {return Navigator.SceneConfigs.PushFromRight;}}
      renderScene={(route,navigator)=>{
        let Component=route.component;
        return(<Component {...route.passProps} {...route} navigator={navigator}/>);
      }}/>

      </View>
    )
  }
}

AppRegistry.registerComponent('Project', () => Project);
