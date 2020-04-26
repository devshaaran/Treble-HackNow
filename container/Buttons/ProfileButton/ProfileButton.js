import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { HomeContext } from '../../../context/Home/HomeContext';


// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class ProfileButton extends Component {

    static contextType = HomeContext;


    render() {
        return (
            // <View style={styles.temp} >
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image source={this.context.state.userImage} style={styles.imageStyle}/>
            </TouchableOpacity>
            // </View>
        )
    }
}

export default ProfileButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EE7C36",
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
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 10,
    },

    temp: {
        width: viewWidth,
        height: viewHeight,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
