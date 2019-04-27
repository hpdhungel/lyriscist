import React from 'react'
import { ScrollView } from 'react-native'

import _ from 'lodash'
import { Card, ListItem } from 'react-native-elements'

const MerchView = () => {
  const merch = [
    {
      id: 1,
      name: 'Mero T-Shirt',
      photo: 'https://cdn.shopify.com/s/files/1/0984/4522/products/false-its-funny-coz-its-true-round-neck-tshirts-5_large.jpg?v=1549605139',
      details: '',
      cost: 25
    },
    {
      id: 2,
      name: 'Mero Hat',
      photo: 'https://rlv.zcache.com/head_programming_trucker_hat-r1615902f4b714d59ae97fda561616a10_eahwi_8byvr_307.jpg',
      details: '',
      cost: 11
    },
    {
      id: 3,
      name: 'Mero Coffee Cup',
      photo: 'https://coffee-brewing-methods.com/wp-content/uploads/Stacked-espresso-coffee-cups-e1495040269860.jpg',
      details: '',
      cost: 9
    },
    {
      id: 4,
      name: 'Mero Umbrella',
      photo: 'https://shsthepapercut.com/wp-content/uploads/2019/03/7e9ec38ac896a6bf486eb900c15fb274.jpg',
      details: '',
      cost: 5
    },
  ]
  return (
    <ScrollView>
      { _.map(merch, item => (
        <Card key={item.id} containerStyle={styles.shadow}>
          <ListItem
            leftAvatar={{ rounded: false, size: 'xlarge', source: { uri: item.photo } }}
            title={item.name}
            titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
            subtitleStyle={{ fontWeight: 'bold' }}
            subtitle={`$${item.cost}`}/>
        </Card>
      )) }
    </ScrollView>
  )
}

const styles = {
  shadow: {
    shadowColor: 'black',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  }
}

export default MerchView
