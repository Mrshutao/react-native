import React, { Component } from 'react'
import ReactNative, {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native'

const { width } = Dimensions.get('window')
import TopViewPage from './common/TopViewPage'
import MsgPage from './common/MsgPage'

export default class FinancingPage extends Component {
  constructor(props){
    super(props);
    this.figureImg=require("./../image/financing/figure.png");
    this.figureImg1=require("./../image/financing/figure1.png");
    this.rightImg=require("./common/img/right_icon.png");
    this.itemsImg=[require("./../image/financing/item0.png"),
                   require("./../image/financing/item1.png"),
                   require("./../image/financing/item2.png"),
                   require("./../image/financing/item3.png"),]
    this.navigator=this.props.navigator;
    this.state={
     
    }
  }

  _toMsg(){
    let self=this;
    self.navigator.push({
      component:MsgPage
      })
  }


  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8"}}>
          <TopViewPage ref={(ref)=>this.TopViewPage=ref}
            showLeft={false}
            headTxt="理财"
            funcRight={this._toMsg.bind(this)}
            showRight={true}/>
        <ScrollView>
          <View style={{backgroundColor:"#fff",padding:20,borderBottomWidth:0.2,borderColor:"#e5e5e5",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View style={{flexDirection:"column",justifyContent:"center"}}>
              <View style={{flexDirection:"row",}}>
                <Text style={{color:"#313d49",fontSize:22,fontWeight:"bold"}}>弘康月月盈</Text>
                <Text style={{color:"#f34f50",fontSize:22,fontWeight:"bold"}}> 即将售罄</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"flex-start",marginTop:10}}>
                 <Text style={{fontSize:14,color:"#9ba3a5",justifyContent:"flex-start"}}>预计年化4.6% 抢到就是赚到</Text>
              </View>
            </View>
            <View style={{justifyContent:"center"}}>
              <Image source={this.figureImg} style={{width:70,height:70}}/>
            </View>
          </View>

          <View style={{paddingVertical:20,flexDirection:"row",marginTop:14,backgroundColor:"#fff"}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[0]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>定期宝</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[1]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>活期宝</Text>
            </TouchableOpacity >

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[2]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>基金宝</Text>
            </TouchableOpacity >

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[3]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>黄金宝</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={[styles.item_head,{borderBottomWidth:0.2,}]}>
              <Text style={styles.head_txt}>理财推荐</Text>
            </View>

            <View style={styles.content_wrap}>
              <View>
                <Text style={{fontSize:14,color:"#a3a3a3"}}>新手专享5天</Text>
                <View style={{flexDirection:"row",marginTop:6}}>
                  <Text style={{fontSize:20,color:"#000",fontWeight:"bold"}}>预计年化收益</Text>
                  <Text style={{fontSize:20,color:"#f6696a",fontWeight:"bold"}}>  提升15%</Text>
                </View>
                <Text style={{fontSize:14,color:"#a3a3a3",marginTop:8}}>随时领取</Text>
              </View>

              <View>
                <Image source={this.figureImg1} style={{width:80,height:80}}/>
              </View>
            </View>
          </View>

           <View style={styles.content}>
            <View style={[styles.item_head,{borderBottomWidth:0.2,}]}>
              <Text style={styles.head_txt}>热销产品</Text>
              
            </View>

            <View style={styles.content_wrap}>
              <TouchableOpacity activeOpacity={0.5} style={styles.wrap_left}>
                <Text style={{fontSize:14,color:"#fff"}}>弘康2年期</Text>
                
                <Text style={{fontSize:24,color:"#fff",fontWeight:"bold"}}>5.50%</Text>

                <Text style={{fontSize:14,color:"#fff",marginTop:8}}>历史年化投资回报率</Text>
              </TouchableOpacity>
              <View style={{width:14,height:100}}/>
              <TouchableOpacity activeOpacity={0.5} style={styles.wrap_right}>
                <Text style={{fontSize:14,color:"#e89b32"}}>弘康日灵活</Text>
                
                <Text style={{fontSize:24,color:"#e89b32",fontWeight:"bold"}}>3.93%</Text>

                <Text style={{fontSize:14,color:"#e89b32",marginTop:8}}>历史年化投资回报率</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>定期宝</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>5.00%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>历史年化投资回报率</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>弘康365天</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",marginTop:10}}>保险理财</Text>
              </View>
            </TouchableOpacity>

             <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>4.60%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>历史年化投资回报率</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>弘康月月盈</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",marginTop:10}}>1千起购 每月一次免费领取</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>活期宝</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>4.05%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>历史年化投资回报率</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View  style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>国华华瑞8号</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",marginTop:10}}>1千起购</Text>
              </View>
            </TouchableOpacity>

             <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>3.93%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>历史年化投资回报率</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>弘康日灵活</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",marginTop:10}}>保险理财</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>黄金宝</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>291</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>昨日金价(元)</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>黄金ETF联接C类</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>分散风险</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,borderColor:"#ddd",borderLeftWidth:0.5,borderRightWidth:0.5,marginHorizontal:5,paddingHorizontal:5}}>10元起购</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>易方达</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>基金宝</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>5.13%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>近一年收益</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>高等级信用债债券C</Text>

                 <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>债券基金</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,borderColor:"#ddd",borderLeftWidth:0.5,borderRightWidth:0.5,marginHorizontal:5,paddingHorizontal:5}}>无申购费</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>易方达</Text>
                </View>
              </View>
            </TouchableOpacity>

             <TouchableOpacity activeOpacity={0.5} style={{padding:20,flexDirection:"row",borderTopWidth:0.5,borderColor:"#ebebeb"}}>
              <View style={{flex:3}}>
                
                <Text style={{fontSize:24,color:"#ff5353",fontWeight:"bold"}}>6.28%</Text>

                <Text style={{fontSize:14,color:"#9fa7aa",}}>近一年收益</Text>
              </View>
              <View style={{width:0.5,backgroundColor:"#ddd",marginRight:10}}/>
              <View style={{flex:4}}>
                <Text style={{fontSize:16,color:"#333d47",}}>稳健收益债券A</Text>

                 <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>分散风险</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,borderColor:"#ddd",borderLeftWidth:0.5,borderRightWidth:0.5,marginHorizontal:5,paddingHorizontal:5}}>无申购费</Text>
                  <Text style={{fontSize:12,color:"#9fa7aa",marginTop:10,}}>易方达</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
         
      </View>
    )
  }
}


const styles = StyleSheet.create({
  middle_item:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  middle_img:{
    width:30,
    height:30
  },
  middle_text:{
    fontSize:14,
    color:"#a2aaad",
    marginTop:10
  },
  content:{
    flexDirection:"column",
    backgroundColor:"#fff",
    marginTop:14
  },
  item_head:{
    paddingHorizontal:20,
    paddingVertical:14,
    borderColor:"#ebebeb",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  head_txt:{
    fontSize:14,
    color:"#222",
    fontWeight:"bold"
  },
  content_wrap:{
    flexDirection:"row",
    padding:20,
    justifyContent:"space-between"
  },
  wrap_left:{
    flex:1,
    backgroundColor:"#5d9bec",
    height:100,
    borderRadius:5,
    padding:8

  },
  wrap_right:{
    flex:1,
    backgroundColor:"#ffe4b5",
    height:100,
    borderRadius:5,
    padding:8
  }


})
