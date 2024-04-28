import React from "react"
import { View, StyleSheet, Text } from "react-native"
import BackButton from "./components/BackButton"
import BreathingTool from "./components/BreathingTool"
import { RootParamList, WorkoutParamList } from "./RouteTypes"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { CompositeScreenProps, NavigationContainer } from "@react-navigation/native"
import EndWarmup from "./components/EndWarmup"
import VisualizeScreen from "./components/Visualization"
import BreathingInitial from "./components/BreathingInitial"

const workoutStack = createNativeStackNavigator<WorkoutParamList>()

const WorkOut = () => {
    return(
        <workoutStack.Navigator initialRouteName="Work" screenOptions={{headerShown: false}}>
            <workoutStack.Screen
                name="Work"
                component={WorkScreen}
            />
            <workoutStack.Screen
                name="Breathing"
                component={BreathingTool}
                initialParams={{ duration: 20, inhaleTime: 5, exhaleTime: 10 }}
            />

            <workoutStack.Screen
                name="BreathingInitial"
                component={BreathingInitial}
            />

            <workoutStack.Screen
                name='Visualization'
                component={VisualizeScreen}
            />

            <workoutStack.Screen
                name='End'
                component={EndWarmup}
            />
        </workoutStack.Navigator>
    
        // <BreathingTool duration={20} inhaleTime={5} exhaleTime={10}></BreathingTool>
        
    )
}


type WorkProps = CompositeScreenProps<
    NativeStackScreenProps<WorkoutParamList, 'Work'>,
    NativeStackScreenProps<RootParamList>
>


const WorkScreen = ({route, navigation}: WorkProps) => {
    const [time, setTime] = React.useState(3);
    const [status, setStatus] = React.useState(false)
    let timerRef = React.useRef(time)
    let timerId: NodeJS.Timer

    
    const timerStart = () => {
        timerId = setInterval(() => {
            timerRef.current -= 1
            if(timerRef.current < 1){
                clearInterval(timerId)
                setStatus(true)
            } else {
                setTime(timerRef.current)
            }
        }, 1000);
        
        return timerId;
    }

    React.useEffect(()=> {
        //not getting called on restart
        if(!status) {
            timerId = timerStart();
        }

        if (status) {
            navigation.navigate('BreathingInitial')
        }
        return () => {
            clearInterval(timerId)
        }
    }, [status]);

    React.useEffect(()=>{
        const restartTimer = navigation.addListener('focus', () => {
            setTime(3)
            timerRef.current = 3
            setStatus(false)
        })

        return restartTimer;
    }, [navigation])


    return (
        <View style={styles.page}>
            <BackButton style={styles.backButton} onClick={() => navigation.goBack()}></BackButton>
            <Text style={styles.pageTitle}>Get ready</Text>
            <Text style={styles.pageTitle}>{time}</Text>
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

    pageTitle : {
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
        marginHorizontal: '11%'
    },

    backButton : {
        width: '100%',
        marginLeft : 40,
        marginTop : 20
    }

})

export default WorkOut;