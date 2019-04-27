import React, { Component } from 'react'

import AlbumDetails from '../components/AlbumDetails'

class AlbumDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('album').title
    }
  }

  render() {
    const album = this.props.navigation.getParam('album', {})
    return <AlbumDetails album={album}/>
  }
}

export default AlbumDetailScreen
