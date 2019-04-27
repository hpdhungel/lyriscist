import React, { Component } from 'react'

import MerchView from '../components/MerchView'

const SCREEN_NAME = 'Merchandise'

class MerchScreen extends Component {
  static navigationOptions = {
    title: SCREEN_NAME
  }

  render () {
    return <MerchView/>
  }
}

export default MerchScreen
