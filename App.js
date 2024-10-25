import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calculator from './src/components/Calculator';
import LandingPage from './src/components/LandingPage';
import Timer from './src/components/Timer';
import { appColors } from './src/utils/appColors';
import { Button, TouchableOpacity, Text } from 'react-native';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LandingPage}
        options={{
          title: 'New To This',
          headerStyle: {
            backgroundColor: appColors.white,
          },
          headerTintColor: appColors.blue,
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
          headerRight: () => (<TouchableOpacity>
            <Text style={{backgroundColor: appColors.blue, color: appColors.white, padding: 10, fontWeight: "bold"}}>LOG OUT</Text>
          </TouchableOpacity>)
        }}
      />
      <Stack.Screen name='Calculator' component={Calculator}  options={{
          title: 'Calculator',
          headerStyle: {
            backgroundColor: appColors.black,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          }
        }}/>
      <Stack.Screen name="Timer"  component={Timer}  options={{
          title: 'Timer',
          headerStyle: {
            backgroundColor: appColors.black,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          }
        }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}