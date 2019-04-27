import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import { Icon } from 'react-native-elements'

import Home from './HomeScreen'
import Audios from './AudiosScreen'
import Merch from './MerchScreen'
import Videos from './VideosScreen'
import WebPageModal from '../components/WebPageModal'

const HomeScreen = createStackNavigator({
    Home: Home
})

const AudiosScreen = createStackNavigator({
    Audios: Audios
})

const MerchScreen = createStackNavigator({
    Merch: Merch
})

const VideosScreen = createStackNavigator({
    Videos: Videos
})

export const WebPageModalScreen = createStackNavigator({
    WebPageModal: { screen: WebPageModal }
})

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Audios: AudiosScreen,
        Videos: VideosScreen,
        Merch: MerchScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let iconName, iconType
                if (routeName === 'Home') {
                    iconName = 'ios-home'
                } else if (routeName === 'Audios') {
                    iconName = 'ios-musical-notes'
                } else if (routeName === 'Videos') {
                    iconName = 'youtube-play'
                    iconType = 'font-awesome'
                } else if (routeName === 'Merch') {
                    iconName = 'ios-shirt'
                }
                return <Icon name={iconName} type={iconType ? iconType : 'ionicon'}  size={25} color={tintColor} />
            },
            tabBarOptions: {
                activeTintColor: 'teal',
                inactiveTintColor: 'gray'
            }
        })
    }
)


const RootStack = createStackNavigator(
    {
        Main: TabNavigator,
        WebPageModal: WebPageModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

export default createAppContainer(RootStack)
