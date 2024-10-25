import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { appColors } from '../utils/appColors';

export default function Timer(){
    const[start, setStart] = React.useState()
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
            <Text style={styles.screenText}>00:00</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity >
                <Text style={styles.button}>
                    START
                </Text>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>
                    RESET
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.mainColor
    },
    screen: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "green"
    },
    screenText: {
        backgroundColor: appColors.grey,
        padding: 50,
        width: 350,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 50
    },
    buttonContainer: {
        flex: 0.4,
        // alignItems: "center",
         justifyContent: "center",
        // backgroundColor: "red",
        flexDirection: "row",
        gap: 20,
    },
    button: {
        backgroundColor: appColors.clearAll,
        padding: 40,
        borderRadius: 30,
        height: 110,
        textAlign: "center",
        color: appColors.white,
        fontSize: 20,
        fontWeight: "bold"
    }
})