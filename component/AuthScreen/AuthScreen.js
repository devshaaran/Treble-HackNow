// Imports
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import SlidablePanel from './SlidablePanel/SlidablePanel';
import { BackButton } from '../../container/Buttons/BackButton/BackButton';
import { AuthContext } from '../../context/Auth/AuthContext';
import images from '../../container/Images/images';

// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;


export default class AuthScreen extends React.Component {

  static contextType = AuthContext;  

  render(){

    let texttodisplay = null;  
    console.log(viewHeight + 'jkj');
    console.log(viewWidth+ 'hjh');

    texttodisplay = (
      <View style={styles.titleOnGif}>
        <Text style={{fontSize: 60, color: '#4AE54A', fontFamily: 'neon'}}>Treble</Text>
        <Text style={{fontSize: 15, color: '#FFF', fontFamily: 'poppins-medium'}}>Start your Musical invasion now</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <BackButton screen="Auth"/>
        {/* Static Animation Portion */}
        <View style={styles.gitContainer}>
          
          {/* {texttodisplay} */}
          {/* <View style={styles.gifImageStyle} /> */}
          <Image source={images.authScreen.boardinggif} style={styles.gifImageStyle}/>
          
        </View> 
        {texttodisplay}   

         {/* Modal View Portion */}
        <SlidablePanel navigation={this.props.navigation}/>

      </View>

    );
  }
  }
  

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: viewWidth,
    height: viewHeight,
    fontFamily: 'poppins-regular'
  },

  gitContainer : {
    marginTop: 150,
    ...(viewHeight > 820) ? {
      height: viewHeight/1.5,
      } : (viewHeight < 530) ? {height: viewHeight/1.6} : {height: viewHeight/1.5},
  
    width: viewWidth,

  },

  gifImageStyle: {
    width: undefined,
    height: undefined,
    flex: 1,
    // resizeMode: 'contain'
  },

  titleOnGif: {
    position: 'absolute',
    alignItems: 'center',  
    top: 80,
    width: viewWidth,
    height: viewHeight,
  },

});
