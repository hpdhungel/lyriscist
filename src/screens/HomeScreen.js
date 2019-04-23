import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

const SCREEN_NAME = 'Home'

class HomeScreen extends Component {
    static navigationOptions = {
        title: SCREEN_NAME
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Sourav 2020!</Text>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
}

export default HomeScreen
