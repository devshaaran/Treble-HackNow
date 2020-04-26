import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Animated, Keyboard } from 'react-native';
import {AuthContext} from '../../../context/Auth/AuthContext'
import FirstScreen from './SliderScreens/FirstScreen';
import SecondScreen from './SliderScreens/SecondScreen';
import ThirdScreen from './SliderScreens/ThirdScreen';
import FourthScreen from './SliderScreens/FourthScreen';
import FifthScreen from './SliderScreens/FifthScreen';
import NextButton from '../../../container/Buttons/NextButton/NextButton'

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default class SlidablePanel extends Component {

    static contextType = AuthContext;

    returnComponent(index){
      return(this.screenDriver[index]);
    }

    _toggleKeypad = () => {
      Animated.timing(this.context.state.sliderHeight, {
        toValue: viewHeight/1.7,
        duration: 500
      }).start();
    };
  
    _keyboardDidHide = () => {
      Animated.timing(this.context.state.sliderHeight, {
        toValue: (viewHeight > 820) ? viewHeight/2.8 : (viewHeight < 530) ? viewHeight/2.4 : viewHeight/2.5,
        duration: 500
      }).start();
    }

    componentDidMount(){
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount(){
      this.keyboardDidHideListener.remove();
    }


    render() {

      let screenDriver = [
        <FirstScreen toggleKeypad={this._toggleKeypad} keyboardDidHide={this._keyboardDidHide}/>, 
        <ThirdScreen toggleKeypad={this._toggleKeypad} keyboardDidHide={this._keyboardDidHide}/>,
        <FourthScreen toggleKeypad={this._toggleKeypad} keyboardDidHide={this._keyboardDidHide}/>,
        <FifthScreen toggleKeypad={this._toggleKeypad} keyboardDidHide={this._keyboardDidHide}/>,
      ]

      // this.context.changePanelState();
      console.log(this.context.state.valueCallingCode)
      
      return (
        <View style={styles.swipeablePanelParent}>
        
        {/* Portioned for Overiding Flex */}
          <Animated.View
            style={{
                ...(viewHeight > 575) ? {
                height: this.context.state.sliderHeight,
                } : {
                height: viewHeight/2.4,
                },
                
                width: viewWidth,
                backgroundColor: '#000',
                borderRadius: 25,
            }}>

            <View style={styles.swipeablePanelContent}>
              
              {/* Screens start from here*/}
              {screenDriver[this.context.state.screenNo]}
              <NextButton navigation={this.props.navigation}/>

            </View>

          </Animated.View>

        </View>
        )

    }
}

const styles = StyleSheet.create({

    swipeablePanelParent : {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center",
      
      
    },
  
    swipeablePanelContent: {
      flex: 1,
      alignItems: "center",
      marginTop: 20
      
    },
  
  });
  