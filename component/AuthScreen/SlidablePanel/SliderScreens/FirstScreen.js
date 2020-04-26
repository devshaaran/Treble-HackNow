import React, { useContext, useEffect } from 'react'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Animated, Keyboard } from 'react-native';
import {AuthContext} from '../../../../context/Auth/AuthContext'

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

const FirstScreen = props => {

    const context = useContext(AuthContext);
    console.log(props);

    // useEffect(() => {
    //     let keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
      
    //     // returned function will be called on component unmount 
    //     return () => {
    //         keyboardDidHideListener.remove();
    //     }
    //   }, [])

    const onTextChanged = (e,inputType) => {
        (inputType) ? context.addPhNumber(e) : context.addCallingCode(e)
    }



    return(

    <React.Fragment>

        <Text style={styles.swipeablePanelContentText}>Please enter your phone number</Text>
        <View style={styles.swipeablePanelMobile}>
            <View style={styles.countrySelectorParent}>
            <CountryPicker
            
            onSelect={value => {
                context.editState({ cca2: value.cca2, callingCode: value.callingCode[0] })
                console.log(value.callingCode[0])
            }}
            countryCode={context.state.cca2}
            withFilter={true} />
            </View>
            <TextInput style={styles.swipeablePanelMobileCode} placeholder={context.state.callingCode} keyboardType={"number-pad"} value={context.state.valueCallingCode} maxLength={4} returnKeyType='done' onChangeText = {(e)=> onTextChanged(e,0)} onFocus={() => props.toggleKeypad()}></TextInput>
            <TextInput style={styles.swipeablePanelMobileNo} keyboardType={"number-pad"} value={context.state.phNumber} maxLength={10} returnKeyType='done' onChangeText = {(e)=> onTextChanged(e,1)} onFocus={() => props.toggleKeypad()}></TextInput>
        </View>
        
        <View style={styles.termsContainer}>
            <Text style={styles.termsText}>I agree to the </Text>
            <Text style={styles.termsTextYellow}>terms and conditions</Text>
        </View>

    </React.Fragment>

    );

}

export default FirstScreen;

const styles = StyleSheet.create({

    termsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  
    termsText: {
      ...(viewHeight > 575) ? {
      
        fontSize: 14,
        marginTop: 30,
        } : {
        
        fontSize: 11,
        marginTop: 25,
        },
      fontFamily: 'poppins-regular',
      color: '#FFF'
      
        
    },
  
    termsTextYellow: {
      ...(viewHeight > 575) ? {
        
        fontSize: 14,
        marginTop: 30,
        } : {
        
        fontSize: 11,
        marginTop: 25,
        },
      fontFamily: 'poppins-medium',
      color: '#4AE54A',
  
    },
  
    swipeablePanelParent : {
      height: viewHeight,
      width: viewWidth,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center"
    },
  
    swipeablePanelChild : {
      ...(viewHeight > 575) ? {
      height: viewHeight/2.8,
      } : {
      height: viewHeight/2.4,
      },
     
      width: viewWidth,
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
    },
  
    swipeablePanelContent: {
      flex: 1,
      alignItems: "center",
      marginTop: 20
      
    },
  
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
  
    swipeablePanelMobileCode: {
      ...(viewHeight > 575) ? {
        width: viewWidth/7,
        height: 50,
        fontSize: 18
        } : {
        width: viewWidth/7,
        height: 40,
        fontSize: 15
        },
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        textAlign: 'center',
        color: '#707070',
  
        
    },
  
    swipeablePanelMobileNo : {
      ...(viewHeight > 575) ? {
        width: viewWidth/2.5,
        height: 50,
        fontSize: 18
        } : {
        width: viewWidth/2.5,
        height: 40,
        fontSize: 15
        },
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        textAlign: 'center',
        color: '#707070',
        
    },
  
    countrySelectorParent: {
  
      ...(viewHeight > 575) ? {
        width: viewWidth/5,
        height: 50,
        } : {
        width: viewWidth/5,
        height: 40,
        },
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
  
      backgroundColor: '#4AE54A',
      ...Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
        },
        android: {
            elevation: 1
  
        },
      }),
  
    }
  
  });
  