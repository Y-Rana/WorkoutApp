import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const FeelingSurvey = () => {
    const [energy, setEnergy] = useState(0)

    return(
        <View>
            <Text style={styles.title}>How are you feeling right now?</Text>
            <Text style={styles.question}>Energy</Text>
        

        </View>
    )
}


const styles = StyleSheet.create({

    title: {
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '600', /* 57.28px */
    },

    question: {
        marginTop: 20,
        color: 'white',
        fontSize: 30,
        fontFamily: 'NeueHaasDisplay-Mediu',
        fontStyle: 'normal',
        fontWeight: '600',
    }
})




export default FeelingSurvey