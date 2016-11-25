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
import {PullView} from 'react-native-pull';
import TopViewPage from '../common/TopViewPage';
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";
import ModalView from '../common/ModalView'
import Utils from '../common/Utils'

export default class MsgPage extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.personImg=require("../../image/my/person.png");
    this.state={
       dataSource:[{id:1, img:this.personImg,userna:"张三",time:"2016-07-08"},
                  {id:2, img:this.personImg,userna:"李四",time:"2016-07-08"},
                  {id:3, img:this.personImg,userna:"王二",time:"2016-07-08"},
                  {id:4, img:this.personImg,userna:"麻子",time:"2016-07-08"},
                  {id:5, img:this.personImg,userna:"张三",time:"2016-07-08"},
                  {id:6, img:this.personImg,userna:"李四",time:"2016-07-08"},
                  {id:7, img:this.personImg,userna:"王二",time:"2016-07-08"},
                  {id:8, img:this.personImg,userna:"麻子",time:"2016-07-08"},
                  {id:9, img:this.personImg,userna:"张三",time:"2016-07-08"},
                  {id:10, img:this.personImg,userna:"李四",time:"2016-07-08"},
                  {id:11, img:this.personImg,userna:"王二",time:"2016-07-08"},
                  {id:12, img:this.personImg,userna:"麻子",time:"2016-07-08"}],
      }
    }




  componentDidMount(){
    
  }
 

  _onPressButton(text){
    alert(text)
  }
  delete(id){
    Utils.vibrate();
    this.ModalView.open(true,this._callBack.bind(this,id))
  }
  _callBack(id){
    let tempArr=this.state.dataSource;
    for(var i=0;i<tempArr.length;i++){
      if(tempArr[i].id==id){
        tempArr.splice(i,1)
      }
    }
    this.setState({
      dataSource:tempArr
    })
    Utils.toast('删除成功！')
  }


  _renderRow(rowData){
 
    return(
     
          <TouchableHighlight 
                onPress={this._onPressButton.bind(this,rowData.userna)}
                underlayColor="#e4e4e4" delayLongPress={500}
                onLongPress={()=>this.delete(rowData.id)}>
            <View style={{flexDirection:"row",height:50,borderBottomWidth:0.5,paddingHorizontal:20,
                          borderColor:"#ddd",alignItems:"center",justifyContent:"space-between"}}>
              <Image source={rowData.img} style={{width:30,height:30}}/>
              <Text style={{fontSize:14,color:"#333"}}>{rowData.userna}</Text>
              <Text style={{fontSize:14,color:"#333"}}>{rowData.time}</Text>
            </View>
          </TouchableHighlight>
      )
  }


  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="长按删除"
          navigator={this.props.navigator}
          showRight={false}/>
           <ListView
               scrollEnabled={true}
               contentContainerStyle={{paddingBottom:5,}}
               dataSource={this.ds.cloneWithRows(this.state.dataSource)}
               renderRow={this._renderRow.bind(this)}
               enableEmptySections={true}/>

           <ModalView ref={(ref)=>this.ModalView=ref}
            warnTitle="删除We邮"
            warnText="确定要删除此条联系人吗？" 
            type={true}
            confir="删除"
            contentAlign="center" />     
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
 


})