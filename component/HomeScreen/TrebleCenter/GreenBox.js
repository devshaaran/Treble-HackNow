import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput,TouchableOpacity } from 'react-native';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class GreenBox extends Component{

    render(){
    let navigateElement;
    if(!this.props.not_user){
        navigateElement = "TrebleDetailUser"
    }
    else{
        navigateElement = "TrebleDetailNonUser"
    }
    return (
        <TouchableOpacity style={styles.greenBox} onPress={() => this.props.navigation.navigate(navigateElement,{info : this.props.info})}>
            <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>
    )
    }
}

const styles = StyleSheet.create({
  
  greenBox:{
    width:viewWidth/1.2,
    height:viewHeight/11,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#4AE54A',
    borderRadius:10,
    alignSelf:'center',
    marginBottom:viewHeight/40
  },
  buttonText:{
    fontFamily:'poppins-medium',
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
    
  }
});