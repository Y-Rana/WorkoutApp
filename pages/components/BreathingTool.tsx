import React, { useEffect } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import BackButton from './BackButton'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList, WorkoutParamList } from '../RouteTypes'

type BreathingProps = CompositeScreenProps<
    NativeStackScreenProps<WorkoutParamList, 'Breathing'>,
    NativeStackScreenProps<RootParamList>
>
const BreathingTool = ({route, navigation} : BreathingProps) => {
    const duration = route.params?.duration
    const inhaleTime = route.params?.inhaleTime
    const exhaleTime = route.params?.exhaleTime

    const [isExhale, setIsExhale] = useState(false);

    let count = 0
    let totalCount = 0
    const inhale = inhaleTime.valueOf()
    const exhale = exhaleTime.valueOf()


    setTimeout(()=> {
        setIsExhale(true)
    }, inhale * 1000)

    useEffect(()=>{
        if (isExhale) {
            setTimeout(()=> {
                setIsExhale(false)
            }, exhale * 1000)
        } else {
            setTimeout(()=> {
                setIsExhale(true)
            }, inhale * 1000)
        }
    }, [isExhale])
        
    return (
        <View style={isExhale ? styles.exhalePage : styles.inhalePage}>
            <BackButton style={styles.backButton} onClick={() => navigation.goBack()}></BackButton>
            <Text style={styles.title}>{isExhale ? 'Exhale': 'Inhale'}</Text>
            {/* <Text>{(count).toString()}</Text> */}
            <Text style={styles.description}>Focus on your breathing.</Text>
            <TouchableOpacity style={styles.nextButton} onPress={()=> navigation.navigate('Visualization')}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    inhalePage : {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor : '#FFA41D'
    },

    exhalePage : {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor : '#2C984B'
    },

    title : {
        width : '77%',
        height : '15%',
        flexDirection : 'column',
        justifyContent : 'center',
        flexShrink: 0,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 64,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
        letterSpacing: -1.92,
        marginTop: '25%',
        marginHorizontal: '12%'
    },

    description : {
        marginTop: '70%',
        flexShrink: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 43,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
        letterSpacing: -1.29,
        marginHorizontal: '12%'
    },

    backButton : {
        width: '100%',
        marginLeft : 40,
        marginTop : 20
    },

    nextButton : {
        borderRadius: 33,
        borderWidth: 2,
        width: '70%',
        height: '8%',
        borderColor: 'white',
        marginTop: 20
    },

    nextButtonText : {
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500', /* 57.28px */
        letterSpacing: 0.125,
        marginTop: 13,
        marginHorizontal: '12%'
    }


})
export default BreathingTool