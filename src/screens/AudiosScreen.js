import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

import AlbumList from '../components/AlbumList'

const SCREEN_NAME = 'Audios'

class AudiosScreen extends Component {
    static navigationOptions = {
        title: SCREEN_NAME
    }

    render() {
        return (
            <ScrollView>
                <Text>{SCREEN_NAME}</Text>
                <AlbumList/>
            </ScrollView>
        )
    }
}

export default AudiosScreen
