import React, { Component } from 'react'
import { StatusBar, Text, TouchableOpacity } from 'react-native'

import { NavigationActions, SafeAreaView } from 'react-navigation'
import { Icon } from 'react-native-elements'

import MyWebView  from './MyWebView'

class WebPageModal extends Component {
  static navigationOptions = ({ navigation }) => {
    const goBack = () => navigation.dispatch(NavigationActions.back())
    const webData = navigation.getParam('webData')
    return {
      headerLeft: <Icon
        onPress={goBack}
        underlayColor='transparent'
        name='md-close-circle'
        type='ionicon'
        color='#b3bdcc'
        size={35}
        iconStyle={styles.leftIcon}
      />,
      headerTitle: <TouchableOpacity onPress={goBack} style={styles.topButton}>
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>{webData.pageTitle}</Text>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: '#232427',
        borderBottomWidth: 0
      }
    }
  }

  render() {
    const { page } = this.props.navigation.getParam('webData')
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#232427"/>
        <MyWebView page={page} />
      </SafeAreaView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#232427'
  },
  leftIcon: {
    padding: 10
  },
  topButton: {
    alignItems: 'center',
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: 500
  }
}

export default WebPageModal