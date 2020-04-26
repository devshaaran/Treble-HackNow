import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native'
import ImagePick from './ImagePick/ImagePick';
import { HomeContext } from '../../context/Home/HomeContext'
import { BackButton } from '../../container/Buttons/BackButton/BackButton';
import { onSignOut } from '../../navigation/auth';
import Settings from './Settings/Settings';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;


export class ProfileScreen extends Component {

    static contextType = HomeContext;

    state = {
        buttonState : false,
    }
    

    render() {
        return (
            <ScrollView style={{backgroundColor: '#FFF'}}>
                <BackButton navigation={this.props.navigation}/>
                <TextInput style={styles.userName} maxLength={20} value={this.context.state.userName} onChangeText = {(e)=> this.context.editState({userName : e})}/>
                <ImagePick />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Settings</Text>
                </View>
                <Settings navigation={this.props.navigation}/>
                <View style={{height: viewHeight/50}}/>
            </ScrollView>
  
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    container : {
        width: viewWidth,
        height: viewHeight,
        backgroundColor: '#FFF',

    },

    nameContainer: {
        alignSelf: 'center',
        marginTop: viewWidth/8,
        width: viewWidth/1.20,
        justifyContent: 'flex-start',
    },

    name : {
        fontSize: 23,
        fontFamily: 'poppins-regular',
        color: '#393535'
    },

    userName: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'poppins-medium',
        color: '#4C4842',
        width: viewWidth/1.3,
        marginTop: viewWidth/2.5,
        textAlign: "center"
    }
})