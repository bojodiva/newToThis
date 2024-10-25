import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
TouchableOpacity } from 'react-native';
import { appColors } from '../utils/appColors';
import { fontSizes } from '../utils/styleSizes';

export default function Calculator(){
    const [calc, setCalc] = useState("");

    const mathOps = ["+", "-", "/", "*", "."]

    const updateCalc = val => {
      if (mathOps.includes(val && calc === '') || mathOps.includes(val)&& mathOps.includes(calc.slice(-1))
       ){
      setCalc("invalid expression");
       }
      setCalc(calc + val);
    }

    const getDigits = () =>{
      let digits = [];
      for(let i = 9; i > 0; i--){
        digits.push(
          <TouchableOpacity key={i} style={styles.digitButton} onPress={() => {updateCalc(i.toString())}}>
            <Text style={styles.buttonText}>{i}</Text>
          </TouchableOpacity>
        )
      }
      return digits;
    }

    const clearAll = () => {
      if(calc == ""){
        return;
      }
      const val = calc.slice(0, "");
      setCalc(val)
    }

    const clearLast = () => {
      if(calc == ""){
        return;
      }
      const val = calc.slice(0, -1);
      setCalc(val)
    }

    const equalTo = () => {
      setCalc(eval(calc). toString())
    }


    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.textStyle}>{calc || "0"}</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
  
      <View style={styles.calculatorContainer}>
        <View style={styles.operatorContainer}>
      <TouchableOpacity style={styles.operatorButton} onPress={() => updateCalc("*")}>
        <Text style={styles.buttonText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorClearLast} onPress={() => clearLast()}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorClearAll} onPress={() => clearAll()}>
        <Text style={styles.buttonText}>AC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => updateCalc("+")}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => updateCalc("-")}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => updateCalc("/")}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>
      {/* </View> */}
      {/* <View> */}
      {/* <Pressable style={styles.digitButton}>
        <Text style={styles.buttonText}>9</Text>
      </Pressable> */}
      {getDigits()}
      <TouchableOpacity style={styles.digitButton} onPress={() => updateCalc("0")}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.digitButton} onPress={() => updateCalc(".")}>
        <Text style={styles.buttonText}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => equalTo()}>
        <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appColors.mainColor,
    },
    screen: {
      flex: 0.2,
      // backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 90
    },
    textStyle: {
      color: "black",
      backgroundColor: appColors.grey,
      padding: 50,
      width: 350,
      textAlign: 'right',
      borderRadius: 20,
      fontSize: fontSizes.lg
    },
    operatorButton: {
      backgroundColor: appColors.operator,
      padding: 20,
      borderRadius: 5,
      margin: 5,
      width: 80,
    },
    operatorClearLast: {
      backgroundColor: appColors.clearLast,
      padding: 20,
      borderRadius: 5,
      margin: 5,
      width: 80,
    },
    operatorClearAll: {
      backgroundColor: appColors.clearAll,
      padding: 20,
      borderRadius: 5,
      margin: 5,
      width: 80,
    },
    digitButton: {
      padding: 20,
      borderRadius: 5,
      margin: 5,
      backgroundColor: appColors.black,
      width: 80,
    },
    calculatorContainer: {
      flex: 0.8,
      // backgroundColor: "red",
    },
    operatorContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      margin: 40,
      gap: 20,
    },
    buttonText: {
      color: appColors.white,
      textAlign: "center"
    }
  });
  