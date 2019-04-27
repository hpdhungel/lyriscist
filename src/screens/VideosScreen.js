import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import VideoList from '../components/VideoList'

const SCREEN_NAME = 'Videos'

class VideosScreen extends Component {
    static navigationOptions = {
        title: SCREEN_NAME
    }

    render() {
        return (
            <ScrollView>
                <VideoList/>
            </ScrollView>
        )
    }
}

export default VideosScreen
