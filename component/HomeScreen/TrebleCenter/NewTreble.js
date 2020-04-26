import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {Arrow} from './Arrow';
import {Square} from './Square';
import {GreenButton} from './GreenButton';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class NewTreble extends Component{

    state = {
        myinstrument: null,
        other_instrument: [],
        description: "",
        title: ""
    }

    _addpress = (key) => {
        this.setState({myinstrument: key})
    }

    _removepress = (key) => {
        this.setState({myinstrument: null})
    }

    addpresslow = (key) => {
        (this.state.other_instrument.includes(key) ? null : this.setState({other_instrument : [...this.state.other_instrument,key]}))
    }

    _removepresslow = (key) => {
        let arr = [...this.state.other_instrument]
        this.setState({other_instrument: [...arr.filter((value) => value!=key)]})
    }
    
    instrumentBucket = {
        "0" : "https://personat.s3.ap-south-1.amazonaws.com/guitar.png",
        "1" : "https://personat.s3.ap-south-1.amazonaws.com/flute.png",
        "2" : "https://personat.s3.ap-south-1.amazonaws.com/piano.png",
        "3" : "https://personat.s3.ap-south-1.amazonaws.com/violin.png",
        "4" : "https://personat.s3.ap-south-1.amazonaws.com/musician.png"
    }

  render(){
    console.log(this.state.other_instrument)
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'#000000',flexGrow : 1,alignItems : 'flex-start', width: viewWidth, justifyContent:'space-evenly'}}>
      <Arrow navigation={this.props.navigation}/>
      <Text style={styles.textStyle}>Name of your Treble</Text>
      <View style={styles.nameIp}>
        <TextInput style={styles.nameIpBox} value={this.state.title} onChangeText={(e) => {
            e.toString()
            this.setState({title: e})}
        }/>
      </View>
      <Text style={styles.textStyle}>Your Treble Description</Text>
   
    <TextInput style={styles.descIp} multiline={true} value={this.state.description} onChangeText={(e) => {
        e.toString()
        this.setState({description: e})}
    }/>
      
      <Text style={styles.textStyle}>Select your Instrument</Text>
      <View style={styles.grid}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
            <Square image={this.instrumentBucket['0']} keys={0} removepress={this._removepress} addpress={this._addpress}/>
            <Square image={this.instrumentBucket['1']} keys={1} removepress={this._removepress} addpress={this._addpress}/>
            <Square image={this.instrumentBucket['2']} keys={2} removepress={this._removepress} addpress={this._addpress}/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
            <Square image={this.instrumentBucket['3']} keys={3} removepress={this._removepress} addpress={this._addpress}/>
            <Square image={this.instrumentBucket['4']} keys={4} removepress={this._removepress} addpress={this._addpress}/>
        </View>
      </View>
      <Text style={styles.textStyle}>Select your Band</Text>
      <View style={styles.grid}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
            <Square image={this.instrumentBucket['0']} keys={0} removepress={this._removepresslow} addpress={this.addpresslow}/>
            <Square image={this.instrumentBucket['1']} keys={1} removepress={this._removepresslow} addpress={this.addpresslow}/>
            <Square image={this.instrumentBucket['2']} keys={2} removepress={this._removepresslow} addpress={this.addpresslow}/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
            <Square image={this.instrumentBucket['3']} keys={3} removepress={this._removepresslow} addpress={this.addpresslow}/>
            <Square image={this.instrumentBucket['4']} keys={4} removepress={this._removepresslow} addpress={this.addpresslow}/>
        </View>
      </View>
      <GreenButton name="Start Trebling" data={this.state} navigation={this.props.navigation}/>
    </ScrollView>
   )
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontFamily:'poppins-medium',
    marginLeft: viewWidth/10,
    color:'#ffffff',
    fontSize: 23,
    marginTop: 30
  },
  nameIp:{
    marginTop:viewHeight/40,
    display:'flex',
    marginLeft: viewWidth/10,
    width:viewWidth/1.2,
    height:viewHeight/15,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    justifyContent:'center',
  },
  nameIpBox:{
    fontFamily:'poppins-medium',
    fontSize:20,
    color:'#4AE54A',
    marginLeft:viewWidth/30,
  },
  desc:{
    display:'flex',
    marginLeft: viewWidth/10,
    width:viewWidth/1.2,
    height:viewHeight/5,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
  },
  descIp:{
    fontFamily:'poppins-medium',
    fontSize:20,
    color:'#4AE54A',
    marginLeft:viewWidth/30,
    textAlignVertical: 'top',
    marginTop:viewHeight/40,
    backgroundColor: '#FFF',
    width:viewWidth/1.2,
    height:viewHeight/5,
    alignSelf: 'center',
    borderRadius:10,
    padding: 10
  },
  grid:{
    
    display:'flex',
    flexDirection:'column',
    
  }
  
});