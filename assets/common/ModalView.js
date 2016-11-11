'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var { width, height, scale } = Dimensions.get('window');

var contentModal;
// 类
export default class ModalView extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      cancelInfo:"取消",

    };
  }

  componentDidMount(){
    if(this.props.cancelInfo){
      this.setState({
        cancelInfo:this.props.cancelInfo
      })
    }
  }

  componentConfir(){
    //  if(this.props.phone){
     //
    //    this.callback(this.props.phone);
    //  } else {
    //    this.callback();
    //  }
     this.callback();
     this._setModalVisible(false);

  }

  componentCancel(){
     this._setModalVisible(false);
  }

  open(visible,callback){
    this._setModalVisible(visible);
    this.callback = callback;
  }

   _setModalVisible(visible){
    this.setState({
      show:visible
    });

  }

     render() {
       var modalBackgroundStyle = {
           backgroundColor:'rgba(0, 0, 0, 0.7)',
          };
       var innerContainerTransparentStyle = {backgroundColor: '#fff',}
       if(this.props.type==true){
           contentModal=(
              <View style={styles.buttonView}>

                    <TouchableOpacity
                       activeOpacity={0.5}
                       style={styles.buttonStyle}
                       onPress={this.componentCancel.bind(this)}>
                       <Text style={[styles.buttonText,{color:"#737373"}]}>
                        {this.state.cancelInfo}
                       </Text>
                     </TouchableOpacity>
                     <View style={styles.verticalLine} />

                    <TouchableOpacity
                       activeOpacity={0.5}
                       style={styles.buttonStyle}
                       onPress={this.componentConfir.bind(this)}>
                       <Text style={styles.buttonText}>
                         {this.props.confir}
                       </Text>
                     </TouchableOpacity>
                   </View>
           );
           }
       else{
         contentModal=(
          <View style={styles.buttonView}>
                 <View style={styles.horizontalLine} />
                  <TouchableOpacity
                     activeOpacity={0.5}
                     style={styles.buttonStyle}
                     onPress={this.componentCancel.bind(this)}>
                     <Text style={styles.buttonText}>
                       确定
                     </Text>
                   </TouchableOpacity>
          </View>
          );
          }

     return (

           <Modal
               animationType='fade'
               transparent={true}
               visible={this.state.show}
               onShow={() => {}}
               onRequestClose={() => {}} >
               <View style={[styles.modalStyle, modalBackgroundStyle]}>
                 <View style={[styles.subView, innerContainerTransparentStyle]}>

                   <Text style={{marginVertical:20,color:"#000",fontSize:16,textAlign:"center",}}>
                    {this.props.warnTitle}
                   </Text>

                   <Text style={{marginBottom:20,color:"#4b4b4b",fontSize:15,textAlign:this.props.contentAlign,}}>
                    {this.props.warnText}
                   </Text>
                   <View style={styles.horizontalLine} />
                   {contentModal}
                 </View>
               </View>
            </Modal>
     );
  }

}



var styles = StyleSheet.create({
  // modal的样式
  modalStyle: {
    // backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:width/15,
    marginRight:width/15,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 3,
    //borderWidth: 0.2,
    borderColor:'#c2c2c2',
  },
  // 标题



  // 水平的分割线
  horizontalLine:{
    height:0.5,
    backgroundColor:'#e5e5e5',
  },
  // 按钮
  buttonView:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonStyle:{
    flex:1,
    height:50,
    alignItems: 'center',
    justifyContent:'center',

  },

  // 竖直的分割线
  verticalLine:{
    width:0.5,
    height:50,
    backgroundColor:'#e5e5e5',
    alignSelf:"flex-start"
  },
  buttonText:{
    fontSize:15,
    color:'#35aaff',
    textAlign:'center',
  },
});
