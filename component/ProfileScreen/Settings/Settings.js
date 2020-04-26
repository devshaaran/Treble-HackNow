import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Setting from './Setting/Setting'

export class Settings extends Component {
    render() {
        return (
            <View>
                <Setting title="Edit Name"/>
                <Setting title="About Krypto"/>
                <Setting title="Terms and Conditons"/>
                <Setting title="Sign Out" navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default Settings
