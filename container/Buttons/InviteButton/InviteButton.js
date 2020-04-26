import React, { Component } from 'react'
import { StyleSheet, Text, Dimensions, Platform, TouchableOpacity} from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class InviteButton extends Component {


    render() {
        return (
            
            <TouchableOpacity style={styles.parentContainer}>
                <Text style={styles.textStyling}>Invite</Text>
            </TouchableOpacity>
            
        )
    }
}

export default InviteButton

const styles = StyleSheet.create({
    parentContainer: {
        ...(viewHeight > 575) ? {
        width: viewWidth/3,
        height: 50,
        } : {
        width: viewWidth/3,
        height: 40,
        },
        backgroundColor: '#EE7C36',
        borderRadius: 10,
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
