import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { SettingsParamList } from './RouteTypes'
import ProfileSettings from './components/settings_components/ProfileSettings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GeneralSettings from './components/settings_components/GeneralSettings'

const SettingsPage = () => {
    const Stack = createNativeStackNavigator<SettingsParamList>()

    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Profile' component={ProfileSettings}/>
            <Stack.Screen name='General' component={GeneralSettings}/>
        </Stack.Navigator>
    )
}


export default SettingsPage