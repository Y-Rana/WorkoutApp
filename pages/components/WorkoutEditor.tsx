import React, { useEffect, useState } from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import BackButton from './BackButton'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CustomizationParamList, RootParamList } from '../RouteTypes'
import FeatherIcon from 'react-native-vector-icons/Feather'

type EditorProps = CompositeScreenProps<
    NativeStackScreenProps<CustomizationParamList, 'Editor'>,
    NativeStackScreenProps<RootParamList>
>

const WorkoutEditor = ({route,navigation} : EditorProps) => {
    const [warmup, setWarmup] = useState([{id: 1, text: 'Hip Mobility'}])
    const [workout, setWorkout] = useState([{id: 1, text: 'Squats'}])
    const [cooldown, setCooldown] = useState([{id: 1, text: 'Assault Bike'}])


    return (
        <View style={styles.page}>
            <View style={styles.pageHeader}>
                <BackButton style={styles.backButton} onClick={()=>navigation.goBack()}/>
                <Text style={styles.pageTitle}>Strength</Text>
            </View>

            <ScrollView contentContainerStyle={styles.mainContainer}>
                <WorkoutBlock title={'Warm-up'} color={'#2C984B'} collection={warmup} setCollection={setWarmup}/>
                <FeatherIcon name={'arrow-down'} color='white' size={40}/>
                <WorkoutBlock title={'Workout'} color={'#FF4040'} collection={workout} setCollection={setWorkout}/>
                <FeatherIcon name={'arrow-down'} color='white' size={40}/>
                <WorkoutBlock title={'Cooldown'} color={'#3C8AFF'} collection={cooldown} setCollection={setCooldown}/>
            </ScrollView>
        </View>
    )
}

export default WorkoutEditor

type BlockProps = {
    title: string
    color: string
    collection: {id: number, text: string}[]
    setCollection: React.Dispatch<React.SetStateAction<{id: number, text: string}[]>>

}

const WorkoutBlock = ({title, color, collection, setCollection} : BlockProps) => {
    useEffect(()=>{

    }, [collection])
    
    return (
        <View style={[styles.workoutBlock, {backgroundColor: color}]}>
            <Text style={styles.blockTitle}>{title}</Text>
            <View style={styles.blockContent}>
                { 
                    collection.map(exercise => (
                        <Text style={[styles.exerciseButton, {color: color}]} key={exercise.id}>{exercise.text}</Text>))
                }
                <TouchableOpacity style={styles.plusButton}>
                    <FeatherIcon name='plus' size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor : 'black'
    },
    
    pageHeader: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 10, 
        marginHorizontal: 40,
        borderBottomWidth: 2,
        borderColor: 'white'
    },

    pageTitle: {
        color: 'white',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: '500',
        letterSpacing: -0.4,
        textTransform: 'uppercase',
    },


    backButton: {
        
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    workoutBlock: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 315,
        flexShrink: 0,
        borderRadius: 39,
    },

    blockTitle: {
        fontSize: 43,
        color: '#FFF',
        textAlign: 'center',
        //height: '20%',
        width: '80%',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: -1.29,
        marginBottom: 5
    },

    blockContent: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },

    plusButton: {
        width: 260,
        borderRadius: 39,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        paddingVertical: 5,
        marginTop: 10
    },

    exerciseButton: {
        width: 260,
        borderRadius: 39,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        paddingVertical: 5,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'NeueHaasDisplay-Roman',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '500', /* 57.28px */
        letterSpacing: 0.125,
        backgroundColor: 'white'
    }
    
})