import React, { useContext, useEffect } from 'react'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Animated, Keyboard } from 'react-native';
import {AuthContext} from '../../../../context/Auth/AuthContext'
import images from '../../../../container/Images/images';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

const FifthScreen = props => {

    const context = useContext(AuthContext);
     

    const onTextChanged = (e) => {
        context.editState({username: e})
    }

    return(

        <React.Fragment>

            <Text style={styles.swipeablePanelContentText}>You've been Successfully Registered</Text>
            <View style={styles.swipeablePanelMobile}>               
                <Image source={images.authScreen.registered} style={styles.imageStyle}/>
            </View>
            
        </React.Fragment>

    );

}

export default FifthScreen;

const styles = StyleSheet.create({

    imageStyle: {
        width: viewWidth/5,
        height: viewHeight/12
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
  