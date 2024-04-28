import { CompositeScreenProps, StackActions, useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native'
import { RootParamList, WorkoutParamList } from "../RouteTypes";
import FeelingSurvey from "./FeelingSurvey";

type EndProps = CompositeScreenProps<
    NativeStackScreenProps<WorkoutParamList, 'End'>,
    NativeStackScreenProps<RootParamList>
>

const EndWarmup = ({route, navigation} : EndProps) => {
    useFocusEffect(
        () => {
          const routes = navigation.getState()?.routes;
          const prevRoute = routes[routes.length - 2];

          const onBackPress = () => {
                if(prevRoute.name === 'Breathing') {
                    navigation.dispatch(
                        StackActions.pop(2)
                    );

                    navigation.dispatch(
                        StackActions.push(prevRoute.name, prevRoute.params)
                    )
                    return true
                }

                return false
          };
    
          const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () => subscription.remove();
        }
    );


    return (
        <View style={styles.page}>
            <FeelingSurvey/>
            <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Workout</Text>
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
        backgroundColor : 'black',
        paddingTop: 30
    },

    startButton : {
        borderRadius: 33,
        borderWidth: 2,
        width: '70%',
        height: '8%',
        borderColor: 'white',
        marginTop: 20
    },

    startButtonText : {
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


export default EndWarmup