import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {GreenButton} from './GreenButton';
import {Square} from './Square';
import {Arrow} from './Arrow';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class PublishTreble extends Component{

    addpress = (key) => {
        console.log(key)
    }

    removepress = (key) => {
        console.log(key)
    }
    

    instrumentBucket = {
        "0" : "https://personat.s3.ap-south-1.amazonaws.com/guitar.png",
        "1" : "https://personat.s3.ap-south-1.amazonaws.com/flute.png",
        "2" : "https://personat.s3.ap-south-1.amazonaws.com/piano.png",
        "3" : "https://personat.s3.ap-south-1.amazonaws.com/violin.png",
        "4" : "https://personat.s3.ap-south-1.amazonaws.com/musician.png"
    }

    data = this.props.navigation.state.params.info

    finished_treble = this.data.external_instruments.map((treble, index) => (treble.other_completed) ?  <Square image={this.instrumentBucket[String(treble.instrument)]} keys={index} key={index} addpress={(key) => this.addpress(key)} removepress={(key) => this.removepress(key)}/> : null)
    pending_treble = this.data.external_instruments.map((treble, index) => (!treble.other_completed) ?  <Square image={this.instrumentBucket[String(treble.instrument)]} keys={index} key={index} addpress={(key) => this.addpress(key)} removepress={(key) => this.removepress(key)}/> : null)
    publishables = this.data.external_instruments.map((treble) => treble.other_completed)
    video_uriss = this.data.external_instruments.map((treble) => treble.video)
    video_uris = (this.data.completed_video) ? [...this.video_uriss,this.data.completed_video] : [...this.video_uriss]
    publishable = (this.data.completed_video) ? [...this.publishables,true] : [this.publishables,false] 

    render(){
        console.log(this.data.completed)
    return (
        <View style={{backgroundColor:'#000000', width: viewWidth, height: viewHeight}}>
        <ScrollView contentContainerStyle={{backgroundColor:'#000000', width: viewWidth, justifyContent:'space-evenly'}}>
        <Arrow navigation={this.props.navigation}/>
        <View style={styles.contain}>
            <Text style={styles.title}>{this.data.title}</Text>
            <Text style={styles.des}>{this.data.description}</Text>
        </View>
        <GreenButton name={(!this.data.completed) ? "Record your Treble" : "View Treble"} navigation={this.props.navigation} treble_id={this.data.id}/>
        <GreenButton name="View my Treble" navigation={this.props.navigation} video_uri={this.data.completed_video}/>
        <Text style={styles.textStyle}>Finished</Text>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, flexDirection: 'row' }}>
            {this.finished_treble}
        </ScrollView>
        <Text style={styles.textStyle}>Pending</Text>
        <ScrollView horizontal={true} contentContainerStyle={{ marginBottom: 30 }}>
            {this.pending_treble}
        </ScrollView>
        <GreenButton name={(!this.data.completed) ? "Publish Treble" : "View Treble"} navigation={this.props.navigation} publishable={!this.publishable.includes(false)} video={this.video_uris} treble_id={this.data.id} main_video={this.data.completed_video}/>
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
    marginLeft: viewWidth/10,
    marginTop: viewHeight/20,
    marginBottom: viewHeight/20,
    color:'#ffffff',
    fontSize: 23
  },
  grid:{
    
    display:'flex',
    flexDirection:'row',
    
  }
  
});