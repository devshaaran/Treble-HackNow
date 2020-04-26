import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Keyboard } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { HomeContext } from '../../../context/Home/HomeContext';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class ImagePick extends Component {

    static contextType = HomeContext;

    componentDidMount(){
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
  
    componentWillUnmount(){
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidHide = () => {
        console.log("Sending Network Call");
    }

    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult.uri)
    }  
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.openImagePickerAsync}>
                <Image source={this.context.state.userImage} style={styles.image}/>
            </TouchableOpacity>
  
        )
    }
}

export default ImagePick

const styles = StyleSheet.create({
    container : {
        alignSelf:"center",
        marginTop: viewHeight/45,
        backgroundColor: 'white',
        width: viewWidth/2.5,
        height: viewHeight/5,
        borderRadius: 10,
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
    },

    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 10,
    }
})