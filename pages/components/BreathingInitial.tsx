import React, { useEffect } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import BackButton from './BackButton'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList, WorkoutParamList } from '../RouteTypes'

type BreathingInitProps = CompositeScreenProps<
    NativeStackScreenProps<WorkoutParamList, 'BreathingInitial'>,
    NativeStackScreenProps<RootParamList>
>
const BreathingInitial = ({route, navigation} : BreathingInitProps) => {
    const [inhaleTime, setInhaleTime] = useState(0) 
    const [exhaleTime, setExhaleTime] = useState(0)
    //0 - inhale, 1 - exhale, 2 - finished
    const [status, setStatus] = useState(0);
    const [time, setTime] = React.useState(0);
    const reset = () => {
        setTime(0)
    }




    const timerStart = () => {
        const timerId = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000);
        
        return timerId;
    }

    React.useEffect(()=> {
        //not getting called on restart
        let timerId: NodeJS.Timer;
        
        if (status === 0) {
            timerId = timerStart()
        }
        
        
        if (status === 1) {
            reset()
            timerId = timerStart()
        }

        if (status === 2) {
            console.log("inhale: " + inhaleTime)
            console.log("exhale: " + exhaleTime)
            navigation.navigate('Breathing', { duration: 30, inhaleTime: inhaleTime, exhaleTime: exhaleTime})
        }

        return () => {
            clearInterval(timerId)
        }
    }, [status]);

    React.useEffect(()=>{
        const restartTimer = navigation.addListener('focus', () => {
            setTime(0)
            setStatus(0)
        })

        return restartTimer;
    }, [navigation])


    const handleButton = () => {
        if(status === 0) {
            setInhaleTime(time)
        } else if (status === 1) {
            setExhaleTime(time)
        }

        if(status != 2) {
            setStatus(status + 1)
        }
    }
        
    return (
        <View style={status === 1 ? styles.exhalePage : styles.inhalePage}>
            <BackButton style={styles.backButton} onClick={() => navigation.goBack()}></BackButton>
            <Text style={styles.title}>{status === 1 ? 'Exhale': 'Inhale'}</Text>
            {/* <Text>{(count).toString()}</Text> */}
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.description}>Focus on your breathing.</Text>
            <TouchableOpacity style={styles.nextButton} onPress={() => handleButton()}>
                <Text style={styles.nextButtonText}>EXHALE</Text>
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

    time : {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 64,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
        letterSpacing: -1.92,
    },

    description : {
        marginTop: '50%',
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
export default BreathingInitial