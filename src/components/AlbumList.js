import React from 'react'
import { View } from 'react-native'

import _ from 'lodash'

import AlbumCard from './AlbumCard'

const AlbumList = () => {
    const albums = [
        {
            id: 1,
            title: 'Marchhu Sajilai',
            coverArt: 'https://i.redd.it/d1udrz70jgd01.jpg'
        },
        {
            id: 2,
            title: 'Marchhu Sajilai 2',
            coverArt: 'https://i.scdn.co/image/3724c5ebe0dc5dfb71309a255c308212aa034217'
        }
    ]
    return (
      <View>
          { _.map(albums, album => <AlbumCard key={album.id} album={album}/>) }
      </View>
    )
}

export default AlbumList
