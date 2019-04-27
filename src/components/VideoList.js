import React from 'react'
import { View } from 'react-native'

import _ from 'lodash'

import VideoCard from './VideoCard'

const VideoList = () => {
  const videos = [
    {
      id: 1,
      title: 'Marchhu Sajilai',
      mediaId: 'uQeCA1cl-g0'
    },
    {
      id: 2,
      title: 'Dalli Mori',
      mediaId: 'ZJErJdiW260'
    },
    {
      id: 3,
      title: 'Pauju',
      mediaId: 'uIdFhB5U_ww'
    }
  ]
  return (
    <View>
      { _.map(videos, video => <VideoCard key={video.id} video={video}/>) }
    </View>
  )
}

export default VideoList
