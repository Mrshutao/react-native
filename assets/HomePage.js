import React, { Component } from 'react'
import ReactNative, {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
import TopViewPage from './common/TopViewPage'
import MsgPage from './common/MsgPage'
import Utils from "./common/Utils"

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.navigator=this.props.navigator;
    this.itemsImg=[require("./../image/home/items1.png"),
                   require("./../image/home/items2.png"),
                   require("./../image/home/items3.png"),
                   require("./../image/home/items4.png"),];
    this.figureImg1=require("./../image/financing/figure1.png");
    this.state={

    }
    this.banners=[
      {
        path:require('./../image/home/banner1.jpg'),
        text:"Aussie tourist dies at Bali hotel"
      },
      {
        path:require('./../image/home/banner2.jpg'),
        text:"Why Stone split from Garfield"
      },{
        path:require('./../image/home/banner3.jpg'),
        text:"Big lie behind Nine’s new show"
      },
    ]
  }

  loadBanners(){

    let imageViews = this.banners.map((value,index) => {
            return (
          <View style={styles.slide} key={"image"}>
            <Image  style={styles.image} source={value.path} />
          </View>
            )})
  
    return imageViews;
  }

  _toMsg(){
 /* let self=this;
  self.navigator.push({
    component:MsgPage
    })*/

 storage.load({
    key: 'loginState',
  }).then(ret => {

    alert(ret.userid);
    
  }).catch(err => {
    
    console.log(err.message);
    switch (err.name) {
        case 'NotFoundError':
            // TODO;
            break;
        case 'ExpiredError':
            // TODO
            break;
    }
  })
 }

  fetchData() {
     
      fetch("http://10.18.22.45:8082",{
        method: "POST",
        headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                  },
        
        }).then((res) => {
              if (res.ok) {
                  res.json().then(function(data) {
                    console.log(data);
                  });
              } else {
                  console.log("Looks like the response wasn't perfect, got status", res.status);
              }
              }, function(e) {
                    console.log("Fetch failed!", e);
                  });
      }

setValue(){
  storage.save({
    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
    rawData: { 
      userid: '123456',
      passwords: 'shutao'
    },
  });
  }
  

  render () {
    var bannerElement=this.loadBanners();
    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8"}}>
          <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={false}
          headTxt="首页"
          funcRight={this._toMsg.bind(this)}
          showRight={true}/>
      <ScrollView>
        <View style={{backgroundColor:"#333300"}}>

          <Swiper style={styles.wrapper} height={160}
            dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            paginationStyle={{
              width:width,height:20,bottom:0
            }} 
            autoplay={false}
           >
            {bannerElement}

          </Swiper>
        </View>

          <View style={{paddingVertical:14,flexDirection:"row",backgroundColor:"#fff",borderBottomWidth:0.2,borderColor:"#ddd"}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item} onPress={()=>this.setValue()}>
              <Image source={this.itemsImg[0]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>金币商城</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[1]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>股神争霸</Text>
            </TouchableOpacity >

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[2]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>金币任务</Text>
            </TouchableOpacity >

            <TouchableOpacity activeOpacity={0.5} style={styles.middle_item}>
              <Image source={this.itemsImg[3]} style={styles.middle_img}/>
              <Text style={styles.middle_text}>天气补贴</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.content}>
            <View style={[styles.item_head,{borderBottomWidth:0.2,}]}>
              <Text style={styles.head_txt}>理财推荐</Text>
            </View>

            <View style={styles.content_wrap}>
              <View>
                <Text style={{fontSize:16,color:"#a3a3a3"}}>新手专享5天</Text>
                <View style={{flexDirection:"row",marginTop:6}}>
                  <Text style={{fontSize:20,color:"#000",}}>预计年化收益</Text>
                  <Text style={{fontSize:20,color:"#f6696a",}}>  提升15%</Text>
                </View>
                <Text style={{fontSize:14,color:"#a3a3a3",marginTop:8}}>保险理财</Text>
              </View>

              <View>
                <Image source={this.figureImg1} style={{width:80,height:80}}/>
              </View>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>保险推荐</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{paddingHorizontal:20,borderTopWidth:0.5,borderColor:"#ebebeb",paddingTop:10}}>
              <Image  source={require("./../image/safe/safe1.png")} style={{height:160,width:width-40}} resizeMode="stretch"/>
              <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:14}}>
                <Text style={{fontSize:16,color:"#010101"}}>小米车险</Text>
                <Text style={{fontSize:14,color:"#7f7f7f"}}>全网底价 VIP理赔服务 免息分期</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <View style={styles.item_head}>
              <Text style={styles.head_txt}>热点资讯</Text>
              <TouchableOpacity activeOpacity={0.5} style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,color:"#9fa7aa"}}>更多</Text>
                <Image source={this.rightImg} style={{width:14,height:14}}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={{paddingHorizontal:20,borderTopWidth:0.5,borderColor:"#ebebeb",paddingVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
              
              <View style={{flex:3}}>
                <Text style={{fontSize:16,color:"#010101"}}>A股对“国家任务”的反馈能否延续？风口正在变化！</Text>
                <Text style={{fontSize:14,color:"#7f7f7f",flex:1}} numberOfLines={1}>最近朋友在问，如何看待国庆长假房价政策的变化</Text>
              </View>
              <View style={{flex:1}}>
                <Image  source={require("./../image/home/news1.jpg")} style={{height:60,width:80}} resizeMode="stretch"/>
              </View>
            </TouchableOpacity>

             <TouchableOpacity activeOpacity={0.5} style={{paddingHorizontal:20,borderTopWidth:0.5,borderColor:"#ebebeb",paddingVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
              
              <View style={{flex:3}}>
                <Text style={{fontSize:16,color:"#010101"}}>阻力依然未破，短期可能回落</Text>
                <Text style={{fontSize:14,color:"#7f7f7f",flex:1}} numberOfLines={1}>上涨趋势、盘整趋势遇阻是很正常的现象，关键是如何遏制</Text>
              </View>
              <View style={{flex:1}}>
                <Image  source={require("./../image/home/news2.jpg")} style={{height:60,width:80}} resizeMode="stretch"/>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"rgba(0,0,0,.2)" ,
    alignItems:"center",
    height:160
  },

  text: {
    color: '#fff',
    fontSize: 14,
  },

  image: {
    width,
    height:160
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  middle_item:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },

   item_head:{
    paddingHorizontal:20,
    paddingVertical:14,
    borderColor:"#ebebeb",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  middle_text:{
    fontSize:13,
    color:"#4c4c4c",
    marginTop:10
  },
  middle_img:{
    width:30,
    height:30
  },
  content:{
    flexDirection:"column",
    backgroundColor:"#fff",
    marginTop:14
  },
  head_txt:{
    fontSize:14,
    color:"#222",
    
  },
  content_wrap:{
    flexDirection:"row",
    padding:20,
    justifyContent:"space-between"
  },
}
