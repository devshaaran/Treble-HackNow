import React, { Component } from 'react'
import { View, Button, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import {Video} from 'expo-av';
import { BackButton } from '../../../container/Buttons/BackButton/BackButton';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;


export class PreviewScreen extends Component {

    data = this.props.navigation.state.params.video_uri
    
    render() {
        return (
           <View style={styles.container}>

               <BackButton screen={"Preview"} navigation={this.props.navigation}/>
               
               <Video
                    source={{ uri: this.data }}
                    rate={1.0}
                    volume={1.0}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.videoStyle}
                />

           </View>
            
        )
    }
}

export default PreviewScreen

const styles = StyleSheet.create({

    container: {
        width: viewWidth,
        height: viewHeight,
        backgroundColor: '#000000',
        flex: 1
    },

    videoStyle : {
        // position: 'absolute',
        width: undefined, 
        height: undefined, 
        flex: 1 
    }, 

})
