import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableHighlight } from 'react-native'

import { NavigationActions } from 'react-navigation'

const DIM = Dimensions.get('window')

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
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onImagePress}>
          <Image
            resizeMode='contain'
            style={{ alignSelf: 'center', height: DIM.height * 0.5, width: DIM.width * 0.8 }}
            source={require('../assets/sourav2020.jpg')}
          />
        </TouchableHighlight>
      </View>
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
