import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ListView,

} from 'react-native'

const { width } = Dimensions.get('window')
import {PullView} from 'react-native-pull';
import TopViewPage from './common/TopViewPage';
import Utils from './common/Utils';
import LocationPage from './test/LocationPage';
import LongPressPage from './test/LongPressPage';
import CalendarPage from './test/CalendarPage';
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";

export default class MsgPage extends Component {
  constructor(props){
    super(props);
    this.navigator=this.props.navigator;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
       dataSource:[{title:"Location"},
                  {title:"LongPress"},
                  {title:"Calendar"},]
                  

      }
    }




  componentDidMount(){
   
  }
  _onPressButton(id){  
    switch(id){
      case "0":
        this.navigator.push({component:LocationPage});
        break;
      case "1":
        this.navigator.push({component:LongPressPage});
        break;
      case "2":
        this.navigator.push({component:CalendarPage});
        break;
      default:
        Utils.toast("正在开发中");
        break;
    }
  }


  _renderRow(rowData,sectionId,rowId){
 
    return(
     
            <TouchableOpacity onPress={()=>this._onPressButton(rowId)}
                         style={{flexDirection:"row",height:60,borderBottomWidth:0.5,height:40,
                          borderColor:"#ddd",alignItems:"center",justifyContent:"center"}}>
              
              <Text style={{fontSize:16,color:"#333"}}>{rowData.title}</Text>
            </TouchableOpacity
            >

      )
  }


  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="测试"
          navigator={this.props.navigator}
          showRight={false}/>
      
           <ListView
               scrollEnabled={true}
               contentContainerStyle={{paddingBottom:5,}}
               dataSource={this.ds.cloneWithRows(this.state.dataSource)}
               renderRow={this._renderRow.bind(this)}
               enableEmptySections={true}/>

 
  
      </View>
    )
  }
}

const styles = StyleSheet.create({



})