import React from 'react'
import { View, Image } from 'react-native'

import { Card, ListItem } from 'react-native-elements'

const AlbumCard = props => {
  const { album } = props
    return (
      <Card containerStyle={styles.shadow}>
        <View style={styles.container}>
          <Image
            source={{ uri: album.coverArt }}
            style={{ width: 100, height: 100, alignSelf: 'center' }}/>
          <View style={{ flex: 1 }}>
            <ListItem
              onPress={this.onPress}
              titleStyle={styles.nameContainer}
              title={album.title}
              subtitle={'Details'}/>
          </View>
        </View>
      </Card>
    )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  nameContainer: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -10
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

export default AlbumCard
