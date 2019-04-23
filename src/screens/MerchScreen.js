import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

const SCREEN_NAME = 'Merch'

class MerchScreen extends Component {
    static navigationOptions = {
        title: SCREEN_NAME
    }

    render() {
        return (
            <ScrollView>
                <Text>{SCREEN_NAME}</Text>
            </ScrollView>
        )
    }
}

export default MerchScreen
