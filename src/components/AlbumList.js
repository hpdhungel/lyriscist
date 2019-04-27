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
        },
        {
            id: 3,
            title: 'Marchhu Sajilai 3',
            coverArt: 'https://images-na.ssl-images-amazon.com/images/I/9124zHpVw9L._SL1500_.jpg'
        },
        {
            id: 4,
            title: 'Marchhu Sajilai 4',
            coverArt: 'https://www.mobygames.com/images/covers/l/436690-marvel-s-guardians-of-the-galaxy-the-telltale-series-episode-2-under-pressure-playstation-4-front.png'
        }
    ]
    return (
      <View>
          { _.map(albums, album => <AlbumCard key={album.id} album={album}/>) }
      </View>
    )
}

export default AlbumList
