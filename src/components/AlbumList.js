import React from 'react'
import _ from 'lodash'

import AlbumCard from './AlbumCard'

const AlbumList = () => {
    const albums = []
    return _.map(albums, album => <AlbumCard key={album.id} album={album}/>)
}

export default AlbumList
