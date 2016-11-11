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

export default class PersonDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
 
      }
    }
 




  componentDidMount(){
   
  }



  render () {
   

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8"}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="个人资料"
          navigator={this.props.navigator}
          rightImg={require("./../image/my/setting.png")}
          funcRight={()=>{alert()}}
          showRight={true}/>
        <View style={{flex:1,backgroundColor:"#f4f4f4"}}>
          <View style={styles.items}>
            <TouchableOpacity style={styles.items_row}>
              <Text style={styles.row_text}>头像</Text>
              <Image source={require("./../image/my/person.png")} style={{width:50,height:50}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.items_row}>
              <Text style={styles.row_text}>实名认证</Text>
              <View style={styles.row_right_view}>
                 <Image source={require("./../image/my/warn_icon.png")} style={{width:16,height:16,marginRight:4}}/>
                 <Text style={styles.row_right_text}>未认证</Text>
                 <Image source={require("./common/img/right_icon.png")} style={{width:16,height:16}}/>
              </View>
            </TouchableOpacity>
          </View>

         <View style={[styles.items,{marginTop:14}]}>

          <TouchableOpacity style={styles.items_row}>
            <Text style={styles.row_text}>风险承受能力测评</Text>
            <View style={styles.row_right_view}>
              
               <Text style={styles.row_right_text}>测测您的前途</Text>
               <Image source={require("./common/img/right_icon.png")} style={{width:16,height:16}}/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.items,{marginTop:14}]}>

          <TouchableOpacity style={styles.items_row}>
            <Text style={styles.row_text}>地址</Text>
            <View style={styles.row_right_view}>
              
               <Text style={styles.row_right_text}>填写详细地址</Text>
               <Image source={require("./common/img/right_icon.png")} style={{width:16,height:16}}/>
            </View>
          </TouchableOpacity>

           <TouchableOpacity style={styles.items_row}>
            <Text style={styles.row_text}>邮箱</Text>
            <View style={styles.row_right_view}>
              
               <Text style={styles.row_right_text}>填写接收电子保单和年度账单</Text>
               <Image source={require("./common/img/right_icon.png")} style={{width:16,height:16}}/>
            </View>
          </TouchableOpacity>
        </View>


         
     
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  items:{
    backgroundColor:"#fff",
    paddingLeft:20
  },
  items_row:{
    flexDirection:"row",
    paddingVertical:15,
    borderBottomWidth:0.5,
    borderColor:"#e6e6e6",
    paddingRight:20,
    alignItems:"center",
    justifyContent:"space-between"
  },
  row_text:{
    fontSize:16,
    color:"#000",

  },
  row_right_view:{
    flexDirection:"row",
    alignItems:"center",

  },
  row_right_text:{
    fontSize:14,
    color:"#a3a3a3"
  }

})