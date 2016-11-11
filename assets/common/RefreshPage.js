/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';

let {width,height}=Dimensions.get("window");
import {PullView} from 'react-native-pull';

export default class RefreshPage extends Component {
  constructor(props){
    super(props);
    this.navigator=this.props.navigator;
    this.callback=this.props.callback;
    this.state={
      isRefreshed:false
    }
  }

onPullRelease(resolve){
  setTimeout(() => {
            this.setState({
              isRefreshed:true
            });

            setTimeout(()=>{
              resolve();
              this.setState({
                    isRefreshed:false
                  });},1000)

        }, 3000);

}

topIndicatorRender(pulling, pullok, pullrelease) {
  let refreshing;
  let pulldown=<View style={{flexDirection:"row"}}><Image source={require('./img/point_dn.png')} style={{width:20,height:20}}/><Text style={styles.refreshText}>下拉可刷新</Text></View>;
  let pullup=<View style={{flexDirection:"row"}}><Image source={require('./img/point_up.png')} style={{width:20,height:20}}/><Text style={styles.refreshText}>松开以刷新</Text></View>;
  if(this.state.isRefreshed){
     refreshing=<View style={{flexDirection:"row"}}><Image source={require('./img/sucess.png')} style={{width:20,height:20}}/><Text style={styles.refreshText}>刷新成功</Text></View>;
  }else{
     refreshing=<View style={{flexDirection:"row"}}><ActivityIndicator color="gray" size="small"/><Text style={styles.refreshText}>玩命刷新中</Text></View>;
  }
 
    return <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
      
      {pulling ? pulldown : null}
      {pullok ? pullup : null}
      {pullrelease ? refreshing : null}
    </View>;
  }

  render() {
    return (
     <PullView 
     onPullRelease={this.onPullRelease.bind(this)} 
     topIndicatorRender={this.topIndicatorRender.bind(this)} 
     topIndicatorHeight={this.props.Height}>
      {this.props.content}
     </PullView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  refreshText:{
    fontSize:14,
    color:"#666",
    marginLeft:8
  }
});
