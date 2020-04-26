import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react'
import { View , Text, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Dimensions} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import {Video} from 'expo-av';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class RecorderScreen extends Component {

    treble_id = this.props.navigation.state.params.id
    instrument = this.props.navigation.state.params.instrument
    not_user = this.props.navigation.state.params.not_user
    video_comp = this.props.navigation.state.params.video_comp

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
        camColor : "#fff",
        loader: null,
        videoplay: null,
      }
    
    handleCameraType=()=>{
    this.setState({type:
        this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
    }

    handleSlide=()=>{
        if(this.not_user){
            console.log("here")
            let videoser = <Video
            source={{ uri: this.video_comp }}
            rate={1.0}
            volume={1.0}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.video}
            />
        this.setState({videoplay:
            this.state.videoplay == null
            ? videoser
            : null
        })
        }
        }
    
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const { statuses } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        this.setState({ hasPermission: status === 'granted' });
        
    }

    handleRecording = async () => {
        if (this.camera && this.state.camColor == "#fff") {
            this.setState({camColor: "#4AE54A"})
            let video = await this.camera.recordAsync().then((res) => {
              console.log(res.uri)
              var data = new FormData();
              var videoz = {
                uri: res.uri,
                type: 'video/mp4',
                name: 'uploader.mp4',
              };
              if(this.not_user){

                data.append('video', videoz);
                axios.post(`https://treble-backend.herokuapp.com/trebleins/video/${this.instrument}/`, data).then((response) => {
                    console.log(response)
                    this.props.navigation.goBack(null);
                })
                .catch((error) => {
                  console.log(error)
                  Alert.alert("Error",String(error).slice(0,30))
                })

              }
              else{
                data.append('completed_video', videoz);
                axios.post(`https://treble-backend.herokuapp.com/treble/video/${this.treble_id}/`, data).then((response) => {
                  this.props.navigation.goBack(null);
                })
                .catch((error) => {
                  console.log(error)
                  Alert.alert("Error",String(error).slice(0,30))
                })
              }
              
            });
        }
        else if (this.camera && this.state.camColor == "#4AE54A"){
            this.camera.stopRecording();
            this.setState({camColor: "#FFF"})
            this.setState({loader : <ActivityIndicator size="large" color="#FFF" />})
        }
      }

    render() {
        console.log(this.state.videoplay)
        const { hasPermission } = this.state
            if (hasPermission === null) {
            return <View />;
            } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
            } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} 
                    type={this.state.type}
                    ref={ref => {
                        this.camera = ref;
                      }}>
                    {this.state.videoplay}
                    <View style={{flex:1, flexDirection:"row",justifyContent:"space-evenly",margin:20}}>
                        <TouchableOpacity
                            onPress={() => this.handleRecording()}
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                            }}>
                            <FontAwesome
                                name="camera"
                                style={{ color: this.state.camColor, fontSize: 40}}
                            />
                        </TouchableOpacity>
                        {this.state.loader}
                        <TouchableOpacity
                            onPress={() => this.handleSlide()}
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',                  
                            }}>
                            <Ionicons
                                name="ios-photos"
                                style={{ color: "#fff", fontSize: 40}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.handleCameraType()}
                            style={{
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                            }}>
                            <MaterialCommunityIcons
                                name="camera-switch"
                                style={{ color: "#fff", fontSize: 40}}
                            />
                        </TouchableOpacity>
                    </View>
                    </Camera>
                </View>
            );
        }
    }
}

export default RecorderScreen

const styles = StyleSheet.create({

    video: {
        width: viewWidth/4,
        height: viewHeight/4,
        top: 0,
        position: 'absolute',
        right: 0,
    }
})