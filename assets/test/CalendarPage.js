import React, { Component } from 'react'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Vibration
} from 'react-native'

const { width } = Dimensions.get('window')
import TopViewPage from '../common/TopViewPage';
import SlidingCalendarView from 'react-native-sliding-calendar-view';

export default class CalendarPage extends Component {
  constructor(props){
    super(props);
    this.state={
       selectedDay: new Date(),

      }
    }




  componentDidMount(){
    
    }

    onDaySelected(day){
      this.setState({
        selectedDay:day
      })
    }
  render () {

    return (
      <View style={{flex:1,backgroundColor:"#f8f8f8",paddingBottom:0}}>
        <TopViewPage ref={(ref)=>this.TopViewPage=ref}
          showLeft={true}
          leftTxt="日历"
          navigator={this.props.navigator}
          showRight={false}/>
        <View style={styles.container}>
          <SlidingCalendarView
            selectedDay={this.state.selectedDay}
            onDaySelected={this.onDaySelected.bind(this)}
          >
            <View style={styles.content}>
              <Text>Past here your content</Text>
            </View>
          </SlidingCalendarView>
        </View>
      
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  }

})