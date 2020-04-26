import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import {GreenButton} from './GreenButton';
import {GreenBox} from './GreenBox';
import images from '../../../container/Images/images';
import { BackButton } from '../../../container/Buttons/BackButton/BackButton';
import axios from 'axios'
import { AuthContext } from '../../../context/Auth/AuthContext';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class AllTreble extends Component{

    static contextType = AuthContext;

    state = {
        elements : null
    }

    componentDidMount(){
        axios.get(`https://treble-backend.herokuapp.com/treble/`)
              .then((response) => {
                  console.log("happening");
                  this.setState({ elements : response.data.map((treble,index) => {
                      return <GreenBox name={treble.title} info={treble} key={index} navigation={this.props.navigation} not_user={true}/>
                  })})
              })
              .catch((error) => {
                console.log("User not exist");
              })
    }

    render(){
    return (
        <ScrollView contentContainerStyle={{backgroundColor:'#000000',flexGrow : 1,alignItems : 'flex-start', width: viewWidth}}>
        <BackButton navigation={this.props.navigation} />
        <View style={styles.trebleBar}>
            <TouchableOpacity >
            <Text style={styles.passive} onPress={() => this.props.navigation.navigate("TrebleCenter")}>Your Treble</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 30}} >
            <Text style={styles.active}>Join Treble</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.frame}>
            {this.state.elements}
        </View>
    </ScrollView>
    )
    }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    width:viewWidth,
    flexDirection:'column',
    justifyContent:'space-evenly',
    backgroundColor:'#000000'
  },
  trebleBar:{
    marginLeft:viewWidth/6.5,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: viewHeight/7
  },
  active:{
    flex:1,
    fontFamily:'poppins-medium',
    color:'#4AE54A',
    fontSize: 23
  },
  passive:{
    flex:1,
    fontFamily:'poppins-medium',
    color:'#575757',
    fontSize: 23
  },
  buttonGreen:{
    width:viewWidth/2,
    height:viewHeight/20,
    backgroundColor:'#4AE54A',
    borderRadius:10,
    alignSelf:'center',
    justifyContent:'center'
  },
  music:{
    alignSelf:'center'
  },
  box:{
    marginTop: viewHeight/15,
    width:viewWidth/1.3,
    height: viewHeight/4,
    alignSelf:'center',
    display:'flex',
    borderColor:'#4AE54A',
    borderRadius:10,
    borderWidth:3,
    justifyContent:'space-around'
  },
  frame:{
    marginTop: viewHeight/15,
    flexDirection:'column',
    justifyContent:'space-around',
    alignSelf:'center'
  }
});