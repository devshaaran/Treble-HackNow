import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { onSignOut } from '../../../../navigation/auth';
import { AuthContext } from '../../../../context/Auth/AuthContext';


// Constants
const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Setting extends Component {

    static contextType = AuthContext;

    _signoutcheck = () => {
        if(this.props.title == "Sign Out"){
            onSignOut().then(() => {
                this.context.editState({signedIn: false, screenNo: 0})
                this.props.navigation.navigate("Auth")})
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.contain} onPress={this._signoutcheck}>
                <Text style={styles.containText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default Setting






const styles = StyleSheet.create({
    contain:{
      marginTop:viewHeight/35,
      flexDirection:'row',
      backgroundColor:'#ffffff',
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
      borderRadius:10,
      width:viewWidth/1.20,
      height:viewHeight/12,
      justifyContent:'flex-start',
      alignSelf:'center'
    },
    containText:{
      fontSize:20,
      marginLeft: viewWidth/15,
      fontFamily:'poppins-regular',
      color:'#EE7C36',
      alignSelf:'center'
    },

}
)