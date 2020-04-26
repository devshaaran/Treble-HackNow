import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {GreenButton} from './GreenButton';
import {Square} from './Square';
import {Arrow} from './Arrow';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default class TrebleDetailNonUser extends Component{

    state = {
        instrument: null
    }

    addpress = (key) => {
        this.setState({instrument: key})
    }

    removepress = (key) => {
        this.setState({instrument: null})
    }

    instrumentBucket = {
        "0" : "https://personat.s3.ap-south-1.amazonaws.com/guitar.png",
        "1" : "https://personat.s3.ap-south-1.amazonaws.com/flute.png",
        "2" : "https://personat.s3.ap-south-1.amazonaws.com/piano.png",
        "3" : "https://personat.s3.ap-south-1.amazonaws.com/violin.png",
        "4" : "https://personat.s3.ap-south-1.amazonaws.com/musician.png"
    }

    data = this.props.navigation.state.params.info

    pending_treble = this.data.external_instruments.map((treble, index) => (!treble.other_completed) ?  <Square image={this.instrumentBucket[String(treble.instrument)]} keys={treble.id} key={index} addpress={(key) => this.addpress(key)} removepress={(key) => this.removepress(key)}/> : null)


    render(){
    console.log(this.data)

    return (
        <View style={{backgroundColor:'#000000', width: viewWidth, height: viewHeight}}>
        <ScrollView contentContainerStyle={{backgroundColor:'#000000', width: viewWidth, justifyContent:'space-evenly'}}>
        <Arrow navigation={this.props.navigation}/>
        <View style={styles.contain}>
            <Text style={styles.title}>{this.data.title}</Text>
            <Text style={styles.des}>{this.data.description}</Text>
        </View>
        <Text style={styles.textStyle}>Choose Your Instrument</Text>
        <ScrollView horizontal={true} ontentContainerStyle={{ flexGrow: 1, flexDirection: 'row' }}>
            {this.pending_treble}
        </ScrollView>
        <GreenButton name="Record Treble" navigation={this.props.navigation} instrument={this.state.instrument} video_comp = {this.data.completed_video}/>
        </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
 
  contain:{
    marginTop: viewHeight/30,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width: viewWidth,
  },
  title:{
    fontFamily:'poppins-medium',
    fontSize:30,
    color:'#4AE54A',
    textAlign:'center',
    marginBottom:viewHeight/60
  },
  des:{
    fontFamily:'poppins-medium',
    fontSize:17,
    color:'#ffffff',
    textAlign:'center',
    marginLeft:viewWidth/10,
    marginRight:viewWidth/10,
    marginBottom:viewHeight/20
  },
  textStyle:{
    fontFamily:'poppins-medium',
    marginTop: viewHeight/20,
    marginBottom: viewHeight/20,
    color:'#ffffff',
    alignSelf: 'center',
    fontSize: 23
  },
  grid:{
    
    display:'flex',
    flexDirection:'row',
    
  }
  
});