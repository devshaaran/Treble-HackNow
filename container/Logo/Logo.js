import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Logo extends Component {
    render() {
        return (
            <View style={{top: 55, left: 30, position: 'absolute'}}>
                <Text style={{fontFamily: 'neon', color: '#4AE54A', fontSize: 35}}>Treble</Text>
            </View>
        )
    }
}

export default Logo
