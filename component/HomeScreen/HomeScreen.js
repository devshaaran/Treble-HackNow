import React, { Component } from 'react'
import { View, Button, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import { HomeContext } from '../../context/Home/HomeContext'
import {Video} from 'expo-av';
import Menu from "../../container/Buttons/MenuButton/MenuButton";
import Logo from '../../container/Logo/Logo';
import Like from '../../container/Buttons/Like/Like';
import Comment from '../../container/Buttons/Comment/Comment';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { onSignOut } from '../../navigation/auth';
import { AuthContext } from '../../context/Auth/AuthContext';
import axios from 'axios';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;


export class HomeScreen extends Component {

    state = {
        uris: [null],
        current_vid: 0,
        main_uri: null,
        ischanging: false
    }

    static contextType = AuthContext;

    _onpress = () => {
        console.log("left swi")
        if(this.state.current_vid < (this.state.uris.length-1)){
            this.setState(
                (prevState) => ({current_vid: (prevState.current_vid+1), ischanging: true}),
                () => { this.setState({main_uri: this.state.uris[this.state.current_vid], ischanging: false}) 
                console.log(this.state.current_vid)}
            )
        }
       
    }

    _repress = () => {
        
        if(this.state.current_vid > 0){
            this.setState(
                (prevState) => ({current_vid: (prevState.current_vid-1), ischanging: true}),
                () => { this.setState({main_uri: this.state.uris[this.state.current_vid], ischanging: false}) 
                console.log(this.state.current_vid)}
            )
        }
        console.log(this.state.current_vid)
    }

    componentDidMount(){
        this.willBlurSubscription = this.props.navigation.addListener('willBlur', this.willBlurAction);
        this.willFocusSubscription = this.props.navigation.addListener('willFocus', this.willFocusAction);
        axios.get(`https://treble-backend.herokuapp.com/treble/`).then((response) => {
            console.log("home happening");
            let valey =  response.data.map((treble,index) => {
                return (treble.completed ? treble.completed_video : null )
            })
            this.setState()
            this.setState(
                (prevState) => ({ uris : valey.filter(function(val) { return val !== null; }) }),
                () => { this.setState({main_uri: this.state.uris[0]}) }
            );
        })
        .catch((error) => {
          console.log(error);
        })
    }

    componentWillUnmount () {
        this.willBlurSubscription.remove();
        this.willFocusSubscription.remove();
      }

    _onclick = () => {
        onSignOut(String(this.context.phNumber)).then(() => {
            this.context.editState({signedIn: false, screenNo: 0})
            this.props.navigation.navigate("Auth")})
    }

    willBlurAction = (payload) => {
        if (this.videoplayer) {
            this.videoplayer.pauseAsync();
          }
      }

      willFocusAction = (payload) => {
        if (this.videoplayer) {
            this.videoplayer.playAsync();
          }
      }
    
    render() {
        console.log(this.state.main_uri)
        if (this.state.main_uri == null){
            video = null;
        }
        else{
            const video = this.state.ischanging ? null : (<Video
                ref={ref => {this.videoplayer = ref}}
                source={{ uri: this.state.main_uri }}
                rate={1.0}
                volume={1.0}
                resizeMode="cover"
                shouldPlay
                isBuffering
                isLooping
                style={styles.videoStyle}
                />);
        }
        
        // console.log(video)

        return (
           <GestureRecognizer onSwipeLeft={() => this._onpress()} onSwipeRight={() => this._repress()} style={styles.container}>
               
                {video}
               
                {/* <Menu /> */}

                <Logo />

                <Like />

                <Comment />

                <ActionButton buttonColor="#4AE54A" position="center" size={70} buttonText="+" buttonTextStyle={{fontSize: 50}}>
                    <ActionButton.Item buttonColor='#000' title="Treble Centre" onPress={() => this.props.navigation.navigate("TrebleCenter")} textStyle={{fontFamily: 'poppins-medium', fontSize: 16}} textContainerStyle={{height: 30}}>
                        <Icon name="md-musical-notes" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#4AE54A' title="Signout" onPress={() => this._onclick()} textStyle={{fontFamily: 'poppins-medium', fontSize: 16}} textContainerStyle={{height: 30}}>
                        <Icon name="md-person" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

           </GestureRecognizer>
            
        )
    }
}

export default HomeScreen

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

    actionButtonIcon: {
        fontSize: 30,
        height: 32,
        color: 'white',
      },

})
