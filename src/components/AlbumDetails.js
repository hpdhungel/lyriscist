import React, { Component } from 'react'
import { ActionSheetIOS, Image, ScrollView, Text, View } from 'react-native'

import _ from 'lodash'
import { Button, Icon, ListItem } from 'react-native-elements'

class AlbumDetails extends Component {
  onSongPress = () => console.log('okay')

  onMore = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Download', 'More Details', 'Cancel'],
        cancelButtonIndex: 2
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log('Download Song')
        } else if (buttonIndex === 1) {
          console.log('Show More Details')
        }
      }
    )
  }

  render() {
    const { album } = this.props
    const songs = [
      {
        id: 1,
        title: 'Song 1',
        coverArt: '',
        details: 'Song Details'
      },
      {
        id: 2,
        title: 'Song 2',
        coverArt: '',
        details: 'Song Details'
      },
      {
        id: 3,
        title: 'Song 3',
        coverArt: '',
        details: 'Song Details'
      },
      {
        id: 4,
        title: 'Song 4',
        coverArt: '',
        details: 'Song Details'
      },
      {
        id: 5,
        title: 'Song 5',
        coverArt: '',
        details: 'Song Details'
      }
    ]
    return (
      <React.Fragment>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: album.coverArt }}
            style={{ width: 120, height: 120, margin: 5, ...styles.shadow }}/>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{album.title}</Text>
          <Button title='Play' buttonStyle={{ backgroundColor: 'teal', borderRadius: 50, width: 100, margin: 5 }}/>
        </View>
        <ScrollView>
          {
            _.map(songs, song => (
              <ListItem
                underlayColor='#252629'
                onPress={this.onSongPress}
                key={song.id}
                title={song.title}
                subtitle={song.details}
                leftAvatar={{
                  rounded: false,
                  size: 'medium',
                  overlayContainerStyle: { backgroundColor: '#2a3547' },
                  icon: { name: 'music', type: 'feather', size: 40 }
                }}
                rightIcon={<Icon name='md-more' type='ionicon' containerStyle={{ margin: 5 }} onPress={this.onMore}/>}
                bottomDivider={true}
              />
            ))
          }
        </ScrollView>
      </React.Fragment>
    )
  }
}

const styles = {
  shadow: {
    borderRadius: 15
  }
}
export default AlbumDetails