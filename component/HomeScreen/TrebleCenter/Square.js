import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Square extends Component{

    state = {
        borderColor : "#4AE54A"
    }

    _onpressed = () => {
        if (this.state.borderColor == "#4AE54A"){
            this.props.addpress(this.props.keys)
            this.setState({borderColor: '#FFF'})
        }
        else{
            this.props.removepress(this.props.keys)
            this.setState({borderColor: "#4AE54A"})
        }
        
    }  

    render(){
        return (
            
            <TouchableOpacity style={[styles.container,{borderColor: this.state.borderColor}]} onPress={() => this._onpressed()}>
                <Image source={{uri:this.props.image}} style={styles.image}/>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
  container:{
      height:viewHeight/10,
      width:viewHeight/10,
      backgroundColor:'#4AE54A',
      borderRadius:10,
      marginLeft: viewWidth/10,
      padding: viewHeight/70,
      borderWidth: 3
      
  },
  image:{
      flex: 1,
      height:undefined,
      width:undefined,
      borderRadius:10,
      resizeMode: 'contain'
      
  }
});