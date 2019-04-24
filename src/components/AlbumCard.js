import React from 'react'
import { Text } from 'react-native'

import { Card } from 'react-native-elements'

const AlbumCard = props => {
    return (
        <Card title={props.album.title}>
            <Text>Album Details</Text>
        </Card>
    )
}

export default AlbumCard
