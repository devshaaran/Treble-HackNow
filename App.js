// Imports
import React from 'react';
import * as Font from 'expo-font';
import { AuthProvider} from './context/Auth/AuthContext'
import ParentScreen from './component/ParentScreen/ParentScreen';
import { HomeProvider } from './context/Home/HomeContext';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {

    await Font.loadAsync({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-medium' : require('./assets/fonts/Poppins-Medium.ttf'),
      'neon' : require("./assets/fonts/Neon.ttf")
    });
    this.setState({ fontLoaded: true });

  }


  render(){

    if(!this.state.fontLoaded){
      return null;
    }

    return (
      <HomeProvider>
        <AuthProvider>
          <ParentScreen fontLoaded={this.state.fontLoaded}/>
        </AuthProvider>
      </HomeProvider>

    );
  }
  }
  
