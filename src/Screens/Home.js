import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  StatusBar
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ships } from "./index";

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchData,setSearchData]=useState([])
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/ships")
      .then((res) => res.json())
      .then((a) => {
        AsyncStorage.setItem("Shipdetails", JSON.stringify(a));
        setData(a);
        setSearchData(a)
      })
      .catch((e) => console.log(e));
  }, []);
  const search=(input)=>{
    
     setSearchData(data.filter((a)=>{return(a.name.toLowerCase().includes(input.toLowerCase())||a.home_port.toLowerCase().includes(input.toLowerCase()))}))
   
    
    
  }
  return (
    <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={"#148026"}/>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",backgroundColor:"white",height:75
        }}
      >
        <TextInput
          placeholder="ShipName or homePort"
          style={{
            width: "60%",
            height: 40,
            fontSize: 18,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,backfaceVisibility:"hidden"
          }}
        
          onChangeText={(a)=>{setInput(a)
          search(input)}}
        />
      </View>
      {!input ? (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={(item) => <Ships data={item} navigation={navigation} />}
        />
      ) : (
        
        <FlatList
          numColumns={2}
          data={searchData}
          renderItem={(item) => <Ships data={item} />}
        />
       
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
