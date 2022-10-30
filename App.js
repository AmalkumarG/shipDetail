import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {Home,ShipDetails,LaunchDetails,SplashScreen} from "./src/Screens/index"

const Mystack=createStackNavigator()
const StackNav=()=>{
  return(
    <Mystack.Navigator>
       <Mystack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
        <Mystack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Mystack.Screen name='Details' component={ShipDetails} options={{headerShown:false}}/>
        <Mystack.Screen name='Launches' component={LaunchDetails} options={{headerShown:false}}/>
    </Mystack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    
  );
}


