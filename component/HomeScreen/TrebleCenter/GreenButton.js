import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../../context/Auth/AuthContext';
import axios from 'axios';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class GreenButton extends Component{

    static contextType = AuthContext;

    _onclick = () => {
        if (this.props.name == "Start a New Treble"){
            this.props.navigation.navigate("NewTreble")
        }

        else if (this.props.name == "Start Trebling"){
            console.log(this.props.data.other_instrument)
            axios.post('https://treble-backend.herokuapp.com/treble/', {
                user: String(this.context.state.phNumber),
                id: Math.floor(Math.random() * 999999),
                description: this.props.data.description,
                title: this.props.data.title,
                instruments: this.props.data.other_instrument,
                user_instrument: this.props.data.myinstrument
            }).then((response) => {
                this.props.navigation.navigate("TrebleCenter");
              })
              .catch((error) => {
                console.log(error)
                Alert.alert("Error",String(error).slice(0,30))
              })
        }

        else if (this.props.name == "Record your Treble"){
            this.props.navigation.navigate("RecorderScreen", {id : this.props.treble_id})
        }

        else if (this.props.name == "Record Treble"){
            this.props.navigation.navigate("RecorderScreen", {id : this.props.treble_id, instrument: this.props.instrument, not_user: true, video_comp: this.props.video_comp})
        }

        else if (this.props.name == "View my Treble"){
            if (this.props.video_uri) {
                this.props.navigation.navigate("PreviewScreen", {video_uri: this.props.video_uri})
            }
            else {
                Alert.alert("Oops Trebler","Seems like you haven't uploaded the video yet ! \nTip : \n If you are sure you have, please restart the app")
            }
        }

        else if (this.props.name == "Publish Treble"){
            if (this.props.publishable) {
            var data = new FormData();
            data.append('links', this.props.video.join(","))
            data.append('length', this.props.video.length)
            data.append('treble_id', this.props.treble_id)
                axios.post('http://192.168.1.2:5000/finalmovie', data).then((response) => {
                this.props.navigation.navigate("TrebleCenter");
              })
              .catch((error) => {
                console.log(error)
                Alert.alert("Error",String(error).slice(0,30))
              })
            }
            else {
                Alert.alert("Oops Trebler","Your Band hasn't uploaded their video yet")
            }
        }

        else if (this.props.name == "View Treble"){
            if(this.props.main_video){
                this.props.navigation.navigate("PreviewScreen", {video_uri: this.props.main_video})
            }
            else{
                Alert.alert("Oops", "Check back in 10 mins")
            }
        }
    }
        
    render(){
        return (
            <TouchableOpacity style={styles.buttonGreen} onPress={this._onclick}>
            <Text style={styles.buttonText}>{this.props.name}</Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    buttonGreen:{
        width:viewWidth/2,
        height:viewHeight/20,
        backgroundColor:'#4AE54A',
        borderRadius:10,
        alignSelf:'center',
        justifyContent:'center',
        marginTop: viewHeight/40,
        marginBottom: viewHeight/20,
      },
      buttonText:{
        fontFamily:'poppins-medium',
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        
      }
});