import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Arrow extends Component{
  render(){
  return (
    
      <TouchableOpacity style={styles.arrowButton} onPress={() => this.props.navigation.goBack(null)}>
        <Image style={styles.arrow} source={require('../../../assets/Images/arrow.png')}/>
      </TouchableOpacity>

   )
  }
}

const styles = StyleSheet.create({
  arrowButton:{
    backgroundColor:'#4AE54A',
    borderRadius:100,
    height:viewHeight/15,
    width: viewWidth/7,
    marginLeft: viewWidth/15,
    justifyContent:'center',
    marginTop: viewHeight/15
  },
  arrow:{
    alignSelf:'center'
  }
});