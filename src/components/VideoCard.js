import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Card, Text } from 'react-native-elements'
import { NavigationActions, withNavigation } from "react-navigation"

const VideoCard = props => {
  const { video } = props
  const coverArt = `https://img.youtube.com/vi/${video.mediaId}/maxresdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${video.mediaId}`
  const onLoadVideo = () => {
    const webData = {
      pageTitle: video.title,
      page: videoUrl
    }
    const navigateAction = NavigationActions.navigate({
      routeName: 'WebPageModal',
      params: { webData },
    })
    props.navigation.dispatch(navigateAction)
  }
  return (
    <TouchableOpacity onPress={onLoadVideo}>
      <Card containerStyle={styles.shadow} onPress={onLoadVideo}>
        <Image
          source={{ uri: coverArt }}
          style={{ width: 320, height: 180, alignSelf: 'center' }}/>
        <Text style={styles.videoTitle}>{video.title}</Text>
      </Card>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  videoTitle: {
    paddingTop: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  shadow: {
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  }
}

export default withNavigation(VideoCard)
