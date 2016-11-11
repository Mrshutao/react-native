/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
 TouchableNativeFeedback,
 Dimensions,
  StatusBar,
} from 'react-native';
import HomePage from "./HomePage"
import MyPage from "./MyPage"
import LoanPage from "./LoanPage"
import SafePage from "./SafePage"
import FinancingPage from "./FinancingPage"
import TabNavigator from 'react-native-tab-navigator';


let {width,height}=Dimensions.get("window");
export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:"首页"
    }
    this.navigator=this.props.navigator;
  }

  componentDidMount(){
   //console.log(this.navigator)
  }

  
  render() {
   

    return (
      <View style={styles.container}>
       <StatusBar
     backgroundColor="#f55152"
     translucent={true}/>
      
    <TabNavigator
    tabBarStyle={{flex:1,borderTopWidth:0.1,paddingVertical:0,
      borderColor:"#dadada",justifyContent:"center",
      alignItems:"center",backgroundColor:"#fff"}}>
      <TabNavigator.Item
        selected={this.state.selectedTab === '首页'}
        title="首页"
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image  style={styles.imageStyle} source={require("./../image/basic/main-icon.png")} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/main-active-icon.png")} />}
        onPress={() => this.setState({ selectedTab: '首页' })}>
        <HomePage  navigator={this.navigator}/>
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={this.state.selectedTab === '理财'}
        title="理财"
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/licai-icon.png")} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/licai-active-icon.png")} />}
        onPress={() => this.setState({ selectedTab: '理财' })}>
       <FinancingPage navigator={this.navigator}/>
      </TabNavigator.Item>

      <TabNavigator.Item
        selected={this.state.selectedTab === '保险'}
        title="保险"
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/baoxian-icon.png")} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/baoxian-active-icon.png")} />}
        onPress={() => this.setState({ selectedTab: '保险' })}>
        <SafePage navigator={this.navigator}/>
      </TabNavigator.Item>

       <TabNavigator.Item
        selected={this.state.selectedTab === '贷款'}
        title="贷款"
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/wallet-icon.png")} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/wallet-active-icon.png")} />}
        onPress={() => this.setState({ selectedTab: '贷款' })}>
        <LoanPage navigator={this.navigator}/>
      </TabNavigator.Item>

       <TabNavigator.Item
        selected={this.state.selectedTab === '我的'}
        title="我的"
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/mine-icon.png")} />}
        renderSelectedIcon={() => <Image style={styles.imageStyle} source={require("./../image/basic/mine-active-icon.png")} />}
        onPress={() => this.setState({ selectedTab: '我的' })}>
        <MyPage navigator={this.navigator}/>
      </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingBottom:5
  },
  tabText:{
    fontSize:12,
    color:"#666",

  },
  selectedTabText:{
    fontSize:13,
    color:"#f55152"
  },
  imageStyle:{
    width:24,height:24,
    marginTop:5
  }
});
