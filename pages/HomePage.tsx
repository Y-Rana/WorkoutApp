import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Octicon from 'react-native-vector-icons/Octicons'
import { CustomizationParamList, RootParamList } from './RouteTypes'
import CustomizerScreen from './components/CustomizeWorkout'
import WorkoutEditor from './components/WorkoutEditor'
import { CompositeScreenProps } from '@react-navigation/native'
import SettingsPage from './SettingsPage'

const customizerStack = createNativeStackNavigator<CustomizationParamList>()

const HomePage = () => {
    return (
        <customizerStack.Navigator initialRouteName='CustomizerStart' screenOptions={{headerShown: false}}>
            <customizerStack.Screen
                name='CustomizerStart'
                component={HomeScreen}
            />

            <customizerStack.Screen
                name='SettingsPage'
                component={SettingsPage}
            />

            <customizerStack.Screen
                name='Customizer'
                component={CustomizerScreen}
            />

            <customizerStack.Screen
                name='Editor'
                component={WorkoutEditor}
            />

        </customizerStack.Navigator>
    )
}

type HomeProps = CompositeScreenProps<
    NativeStackScreenProps<CustomizationParamList, 'CustomizerStart'>,
    NativeStackScreenProps<RootParamList>
>

const HomeScreen = ({route, navigation} : HomeProps) => {
    return(
        <View style={styles.page}> 
            <View style={styles.header}>
                <TouchableOpacity style={styles.settingsButton}>    
                    <Octicon name='bell' size={30} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsButton} onPress={()=>navigation.navigate('SettingsPage')}>    
                    <Ionicon name='settings-outline' size={30} color='white'/>
                </TouchableOpacity> 
            </View>

            <TouchableOpacity style={styles.workoutCustomizer} onPress={()=> navigation.navigate('Customizer')}>
                <Text style={styles.customizerText}>Customise your workouts</Text>
            </TouchableOpacity>

            <LinearGradient colors={['#FFA41D','#FF4040']} locations={[0, 1.0]} style={styles.dataView}>
                <ScrollView>
                    <Text style={styles.dataText}>This will be data collected from the server and displayed</Text>
                </ScrollView>
            </LinearGradient>
        </View>
    )   
}

const styles = StyleSheet.create({
    page : {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    workoutCustomizer : {
        width: '80%',
        height: '15%',
        borderRadius: 39,
        backgroundColor: '#3C8AFF',
        flexShrink : 0,
    },

    customizerText : {
        justifyContent: 'center',
        flexShrink: 0,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 42,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
        letterSpacing: -1.26,
        marginVertical: 10,
    },

    dataView : {
        marginTop: 20,
        width: '80%',
        height: '60%',
        flexShrink: 0,
        borderRadius: 39,
        padding: 30
    },

    dataText : {
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
    },

    settingsButton : {
        marginLeft: 30
    },

    header : {
        marginTop: 20,
        marginBottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }


})


export default HomePage