import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native"
import { appColors } from '../utils/appColors';

export default function LandingPage({navigation}){


    return(
     <SafeAreaView style={styles.container}>
        <View>
        <Text style={{color: appColors.white, fontSize: 20,}}>WELCOME TO ABISOLA'S PRACTICE</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {navigation.navigate("Calculator")}}>
            <Text style={{backgroundColor: appColors.blue, color: appColors.white, padding: 10, fontWeight: "bold", padding: 20}}>CALCULATOR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Timer")}}>
            <Text style={{backgroundColor: appColors.blue, color: appColors.white, padding: 10, fontWeight: "bold", padding: 20}}>TIMER</Text>
          </TouchableOpacity>
          </View>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: appColors.black,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonContainer: {
        flex: 0.2,
        flexDirection: "row",
        gap: 20,
        marginTop: 50
    }
})