//Will focus on helping people visualize
//giving cues to focus on specific things
//such as weather, feelings, and other cues


import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useEffect, useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { RootParamList, WorkoutParamList } from '../RouteTypes'
import BackButton from './BackButton'


type VisProps = CompositeScreenProps<
    NativeStackScreenProps<WorkoutParamList, 'Visualization'>,
    NativeStackScreenProps<RootParamList>
>

const script = `Starting the visualization sequence
Preparation
What do you see right now? Try to take in everything around you
Focus on your skin, on all the things you are touching right now
Focus on the noises in your surroundings
What do you taste right now?
What does it smell like?
Now think ahead to the performance in the future
What outcome do you want to achieve?
Where is it happening? What does the place look like?
What time of day is it? Night? Morning?
How will you enter the venue? What will you feel as you enter?
The performance
How does it start?
Everything is going as smoothly as possible. How does your body move? Focus on your technique, your muscles, your tendons
What sounds are you hearing?
How do you feel?
What do you see?
Achieving the outcome
What do you see?
What emotions are erupting as you reach your goal?`

const instructions = script.split('\n')
let counter = 0
const VisualizeScreen = ({route, navigation}: VisProps) => {
    const [currentInstruction, setCurrentInstruction] = useState('')
    
    const next = useCallback(()=> {
        if (counter>=instructions.length-1) {
            navigation.navigate('End')
            console.log(currentInstruction)
            return
        }
        counter++;
        setCurrentInstruction(instructions[counter]);
    }, []);

    useEffect(()=>{
        
        const ref = setInterval(next, 7000);
        return () => clearInterval(ref);

    }, [next])


    //Start instructions from beginning if user returns (don't know if intended)
    useEffect(()=>{
        const restart = navigation.addListener('blur', ()=> {counter = 0})

        return restart;
    }, [navigation])

    return (
        <View style={styles.page}>
            <BackButton style={styles.backButton} onClick={() => navigation.goBack()}></BackButton>
            <Text style={styles.title}>Visualization</Text>
            <Text style={styles.instructions}>{currentInstruction}</Text>
            <TouchableOpacity style={styles.nextButton}onPress={next}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipButton}onPress={()=>navigation.navigate('End')}>
                <Text style={styles.skipButtonText}>SKIP</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor : '#0d0c1d',
        paddingTop: 30
    },

    backButton : {
        width: '100%',
        marginLeft : 40,
        marginTop : 20
    },

    title: {
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 60,
        marginTop: '20%',
        fontStyle: 'normal',
        fontWeight: '600',
    },

    instructions: {
        marginTop:'30%',
        color: 'white',
        fontSize: 30,
        fontFamily: 'NeueHaasDisplay-Mediu',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '600',
    },

    nextButton: {
        position: 'absolute',
        borderRadius: 33,
        borderWidth: 2,
        width: '40%',
        height: '8%',
        borderColor: 'white',
        left: 20,
        bottom: 40,
        alignItems: 'center' 
    },

    nextButtonText: {
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
    },

    skipButton: {
        position: 'absolute',
        borderRadius: 33,
        borderWidth: 2,
        width: '40%',
        height: '8%',
        borderColor: 'white',
        right: 20,
        bottom: 40,
        alignItems: 'center', 
        backgroundColor: 'white'
    },

    skipButtonText: {
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#0d0c1d',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500', /* 57.28px */
        letterSpacing: 0.125,
        marginTop: 13,
        marginHorizontal: '12%'
    }

})


export default VisualizeScreen