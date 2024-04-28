import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import BackButton from './BackButton'
import { CustomizationParamList, RootParamList } from '../RouteTypes'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import LinearGradient from 'react-native-linear-gradient'


type CustomizerProps = CompositeScreenProps<
    NativeStackScreenProps<CustomizationParamList, 'Customizer'>,
    NativeStackScreenProps<RootParamList>
>

const CustomizerScreen = ({route, navigation} : CustomizerProps) => {

    // Fetch all workouts created by user

    return (
        <LinearGradient colors={['#3c8aff', '#000']} locations={[0, 0.65]} style={styles.page}>
            <BackButton style={styles.backButton} onClick={()=>navigation.goBack()}/>
            <Text style={styles.title}>Edit your presets</Text>

            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.buttonBackground} onPress={()=> navigation.navigate('Editor')}>
                    <Text style={styles.buttonText}>STRENGTH</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBackground}>
                    <Text style={styles.buttonText}>ENDURANCE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBackground}>
                    <Text style={styles.buttonText}>POWER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newPresetBackground}>
                    <Text style={styles.newPresetText}>NEW PRESET</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor : 'black'
    },

    backButton: {
        width: '100%',
        marginLeft : 40,
        marginTop : 20
    },

    mainContainer : {
        height: '33%',
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },

    title: {
        marginTop: 40,
        fontSize: 43,
        color: '#FFF',
        textAlign: 'center',
        height: '15%',
        width: '80%',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: -1.29,
        marginBottom: 60
    },

    buttonBackground: {
        flexShrink: 0,
        borderRadius: 43,
        borderWidth: 2,
        backgroundColor: '#3C8AFF',
        borderColor: '#3C8AFF',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginTop: 15,
        width: '70%'
    },

    buttonText: {
        color: '#FFF', 
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    },

    newPresetBackground: {
        flexShrink: 0,
        borderRadius: 43,
        borderWidth: 2,
        backgroundColor: 'black',
        borderColor: 'white',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginTop: 15,
        width: '70%'
    },

    newPresetText : {
        color: '#FFF', 
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    }
})

export default CustomizerScreen