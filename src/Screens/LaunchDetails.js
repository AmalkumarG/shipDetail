import { Image, StyleSheet, Text, View ,ScrollView,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hyperlink from 'react-native-hyperlink';
const LaunchDetails = ({route}) => {
    const [dat,setDat]=useState(route.params.ab)
  return (
    <ScrollView style={{padding:10,backgroundColor:"#cef0d4"}}>
    <StatusBar backgroundColor={"#148026"}/>
    <Text style={{fontSize:20,fontWeight:"bold"}}>Launch Details</Text>
    <Text style={styles.disp}>launchpad: {dat.launchpad}</Text>
    <Text style={styles.disp}>flight_number: {dat.flight_number}</Text>
    <Text style={styles.disp}>name: {dat.name}</Text>
    <Text style={styles.disp}>date_utc: {dat.date_utc}</Text>
    <Text style={styles.disp}>date_local: {dat.date_local}</Text>
    <Text style={styles.disp}>date_precision: {dat.date_precision}</Text>
    <Text style={styles.disp}>ships: {dat.ships}</Text>
    <Text style={styles.disp}>static_fire_date_utc: {dat.static_fire_date_utc}</Text>
    <Text style={styles.disp}>static_fire_date_unix: {dat.static_fire_date_unix}</Text>
    <Hyperlink linkDefault={true} >
    <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
    <Text style={styles.disp}>presskit : </Text>
    <Text style={styles.link}>{dat.links.presskit}</Text>
    </View>
    <View style={{flexDirection:"row",padding:5,alignItems:"center"}}>
    <Text style={styles.disp}>webcast : </Text>
    <Text style={styles.link}>{dat.links.webcast}</Text>
    </View>
    <View style={{flexDirection:"row",padding:5,alignItems:"center"}}>
    <Text style={styles.disp}>youtube_id : </Text>
    <Text style={styles.link}>{dat.links.youtube_id}</Text>
    </View>
    <View style={{flexDirection:"row",padding:5,alignItems:"center"}}>
    <Text style={styles.disp}>wikipedia : </Text>
    <Text style={styles.link}>{dat.links.wikipedia}</Text>
    </View>
    </Hyperlink>
    </ScrollView>
  )
}

export default LaunchDetails

const styles = StyleSheet.create({
    disp:{
        margin:10,fontSize:18
    },
    link:{
        color:"red",textDecorationLine:"underline",fontSize:18,width:200
    }
})