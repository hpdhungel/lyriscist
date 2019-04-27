import React, { Component } from 'react'
import { Image, ScrollView, View, TouchableHighlight } from 'react-native'

import { NavigationActions } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Sourav 2020'
  }
  onImagePress = () => {
    const webData = {
      pageTitle: 'Go Fund Me Page',
      page: 'https://www.gofundme.com/70ln46w'
    }
    const navigateAction = NavigationActions.navigate({
      routeName: 'WebPageModal',
      params: { webData },
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.onImagePress}>
            <Image
              style={{ width: 380, height: 250 }}
              source={{ uri: 'https://d2g8igdw686xgo.cloudfront.net/37806502_155539211748298_r.jpg' }}
            />
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}

export default HomeScreen
