import { Image, StyleSheet, Text, View,LogBox ,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
LogBox.ignoreAllLogs();
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>navigation.navigate("Home"),2000)
    },[])
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={"#148026"}/>
    <View style={{height:205,width:205,backgroundColor:"black",alignItems:"center",justifyContent:"center",borderRadius:125,elevation:50}}>
    <Image source={require("../Images/ship.png")} style={{height:200,width:200}}/>
    </View>
      
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#148026"
    }
})