import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import images from '../../Images/images';

// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class MenuButton extends Component {
    render() {
        return (
            // <View style={styles.temp} >
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate("Bubble")}>
                <View style={styles.aligner}>
                    <Image source={images.navBar.image} style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
            // </View>
        )
    }
}

export default MenuButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: viewHeight/23,
        alignSelf: 'center',
        backgroundColor: "#4AE54A",
        marginRight: viewWidth/2.5,
        width: viewHeight/13,
        height: viewHeight/13,
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

    imageStyle: {
        width: viewHeight/22,
        height: viewHeight/22,
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
