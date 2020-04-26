import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Animated } from 'react-native';
import {AuthContext} from '../../../context/Auth/AuthContext'
import images from '../../Images/images' 

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class BackButton extends Component {

    static contextType = AuthContext;

    backButtonClick = () => {


        if (this.props.screen=="Preview"){
            this.props.navigation.goBack(null);
        }
        else if (this.props.screen !== "Auth"){
            this.props.navigation.navigate("Home");
        }
        else {
            let presScreenNo = this.context.state.screenNo;
            if (presScreenNo > 0){
                this.context.editState({screenNo: presScreenNo - 1});
            }
        }
        
    }

    render() {

        let displayBackButton = null;
        let screenCheck = [1,2,3];
        let buttonImage = (this.props.screen == 'Auth') ? images.backButton.white : images.backButton.yellow;
        
        (screenCheck.includes(this.context.state.screenNo) || this.props.screen !== 'Auth') ? displayBackButton = (

            <TouchableOpacity style={styles.opacityStyle} onPress={this.backButtonClick}>
            <Image source={buttonImage} style={styles.backStyle} />
            </TouchableOpacity>

        ) : displayBackButton = null

        return (
        <React.Fragment>    
            {displayBackButton}
        </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    backStyle: {
        // position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 200,
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'contain'
    
      },

    opacityStyle : {
        zIndex: 300, 
        top: viewWidth/8, 
        position: 'absolute', 
        left: viewWidth/20,  
        width: viewWidth/8, 
        height: viewHeight/17
    }
})