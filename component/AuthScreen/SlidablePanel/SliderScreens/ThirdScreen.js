import React, { useContext, useEffect } from 'react'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Animated, Keyboard } from 'react-native';
import {AuthContext} from '../../../../context/Auth/AuthContext'

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

const ThirdScreen = props => {

    const context = useContext(AuthContext);
     

    const onTextChanged = (e) => {
        context.editState({name: e})
    }

    return(

        <React.Fragment>

            <Text style={styles.swipeablePanelContentText}>Please enter your name</Text>
            <View style={styles.swipeablePanelMobile}>               
                <TextInput style={styles.swipeablePanelMobileNo} keyboardType={"default"} value={context.state.name} maxLength={25} returnKeyType='done' onChangeText = {(e)=> onTextChanged(e)} onFocus={() => props.toggleKeypad()}></TextInput>
            </View>
            
        </React.Fragment>

    );

}

export default ThirdScreen;

const styles = StyleSheet.create({

    swipeablePanelContentText: {
      ...(viewHeight > 575) ? {
      fontSize: 18,
      marginTop: 25, 
      } : {
      fontSize: 14,
      marginTop: 10
      },
      color: '#FFF', 
      fontFamily: 'poppins-regular'
    },
  
    swipeablePanelMobile: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-evenly',
      width: viewWidth,
      ...(viewHeight > 575) ? {
        marginTop: 25,
        height: 55
        } : {
        marginTop: 18,
        height: 45
        },
  
    },
  
    swipeablePanelMobileNo : {
      ...(viewHeight > 575) ? {
        width: viewWidth/1.3,
        height: 55,
        fontSize: 19
        } : {
        width: viewWidth/2,
        height: 50,
        fontSize: 14
        },
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        textAlign: 'center',
        color: '#707070',
        fontFamily: 'poppins-regular'
        
    },

  });
  