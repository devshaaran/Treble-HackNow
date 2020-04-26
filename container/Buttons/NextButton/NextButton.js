import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Platform, TouchableOpacity, Animated, Alert } from 'react-native';
import {AuthContext} from '../../../context/Auth/AuthContext';
import {onSignUp, onSignIn} from '../../../navigation/auth';
import axios from 'axios'


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class NextButton extends Component {

    static contextType = AuthContext;

    screenIncrementor = () => {
        let presScreenNo = this.context.state.screenNo;
        
        if(presScreenNo == 0){
            axios.get(`https://treble-backend.herokuapp.com/users/${this.context.state.phNumber}/`)
              .then((response) => {
                let key = String(response.data.phone_number);
                onSignIn(key).then(() => {
                    this.context.editState({signedIn: true})
                    this.props.navigation.navigate("App")})
              })
              .catch((error) => {
                console.log(error);
                this.context.editState({screenNo: presScreenNo + 1});
              })
            }

        else if ((presScreenNo < 3) && (!this.context.state.signedIn)){
            this.context.editState({screenNo: presScreenNo + 1});
        }

        else if (presScreenNo == 3){
            console.log("Sign Up")
            axios.post('https://treble-backend.herokuapp.com/users/', {
                phone_number: String(this.context.state.phNumber),
                name: this.context.state.name
            }).then((response) => {
                let key = String(response.data.phone_number);
                onSignUp(key).then(() => {
                    this.context.editState({signedIn: true})
                    this.props.navigation.navigate("App")})
              })
              .catch((error) => {
                console.log(error)
                Alert.alert("Error",String(error).slice(0,30))
              })
        }

        else if (this.context.state.signedIn) {
            this.props.navigation.navigate("App");
        }

        console.log(presScreenNo);
       
    }

    render() {
        return (
            
            <TouchableOpacity style={styles.parentContainer} onPress={this.screenIncrementor}>
                <Text style={styles.textStyling}>Next</Text>
            </TouchableOpacity>
            
        )
    }
}

export default NextButton

const styles = StyleSheet.create({
    parentContainer: {
        ...(viewHeight > 820) ? {
        width: viewWidth/2.5,
        height: 50,
        marginBottom: 55,
        } : (viewHeight < 530) ? {
        width: viewWidth/2.5,
        height: 40,
        marginBottom: 30
        } : {
        width: viewWidth/2.5,
        height: 50,
        marginBottom: 20
        },
        backgroundColor: '#4AE54A',
        borderRadius: 7,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    
    textStyling: {
        ...(viewHeight > 575) ? {
        fontSize: 18
        } : {
        fontSize: 14
        },
        color: '#ffffff',
        fontFamily: 'poppins-medium',
        fontWeight: '600'

    }
})
