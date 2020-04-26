// Imports
import React from 'react';
import { AuthContext } from '../../context/Auth/AuthContext'
import { createAppContainer } from 'react-navigation'
import AuthNavigation from '../../navigation/AuthNavigation'
import AppNavigation from '../../navigation/AppNavigation';
import { isSignedIn } from "../../navigation/auth";
import {createSwitchNavigator} from 'react-navigation'

export default class ParentScreen extends React.Component {
  
  static contextType = AuthContext;

    state = {
        fontLoaded: false,
    };

  componentDidMount(){
    this.context.editState({fontLoaded: this.props.fontLoaded});  
    isSignedIn()
      .then(res => this.context.editState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
    }

    SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppNavigation
    },
    {
        initialRouteName: (this.context.state.signedIn) ? "App" : "Auth"
    }
    )


    AppContainer = createAppContainer(this.SwitchNavigator)


  render(){

    console.log("status " + this.context.state.checkedSignIn)
    console.log("signed status " + this.context.state.signedIn)

    if (!this.context.state.checkedSignIn) {
        return null;
    }

    
    return <this.AppContainer />;
    

  }
  }
  
