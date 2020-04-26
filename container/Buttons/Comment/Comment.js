import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import images from '../../Images/images';

// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Comment extends Component {
    render() {
        return (
            // <View style={styles.temp} >
            <TouchableOpacity style={styles.container} onPress={() => console.log("comment")}>
                <View style={styles.aligner}>
                    <Image source={images.home.comment} style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
            // </View>
        )
    }
}

export default Comment

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: viewHeight/4.2,
        right: 0,
        backgroundColor: "transparent",
        marginRight: viewWidth/40,
        width: viewHeight/14,
        height: viewHeight/18,
        // borderRadius: 10,
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

    imageStyle: {
        width: viewHeight/30,
        height: viewHeight/30,
    },

    aligner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    temp: {
        width: viewWidth,
        height: viewHeight,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})