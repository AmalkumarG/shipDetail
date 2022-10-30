import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import React, { useState } from "react";

const ShipDetails = ({ route }) => {
  
  const [data, setData] = useState(route.params.data.item);
 
  const [key, setKey] = useState(Object.keys(data));
  const launch=async(c)=>{
    
    let ab=await fetch(`https://api.spacexdata.com/v4/launches/${c}`).then((res)=>res.json())
    route.params.navigation.navigate("Launches",{ab})
        
      
     
      
  }
  const stateIndicate=()=>{
    switch(data.active){
      case true:return{
        ...styles.state,backgroundColor:"#d7f5dd"
      }
      case false:return{...styles.state,backgroundColor:"#f5d9d7"}
    }
  }
  return (
    <ScrollView style={{ padding: 5,backgroundColor:"white", }}>
    <StatusBar backgroundColor={"#148026"}/>
    <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}>
    <View style={stateIndicate()}>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    {
        data.image!=null?<Image
        source={{ uri: data.image }}
        resizeMode="contain"
        style={{ height: 300, width: "95%" ,borderRadius:10}}
      />:<View
          style={{
            height: 300,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No image</Text>
        </View>
      }

    </View>
   
      
      {key.map((a) => {
        if (a == "image" || a == "active" || a == "link") {
        } else if (a == "launches") {
          return data[a].map((c, index) => (
            <View style={{ margin: 10 }}>
              <Text style={{fontSize:18 }}>View launche{index + 1}</Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: "80%",
                  backgroundColor: "#42adf5",
                  borderRadius: 10,
                  elevation: 10,fontSize:18
                }}
                onPress={()=>launch(c)}
              >
                <Text style={{ margin: 10,fontSize:18 }}>launche{index+1}:{c}</Text>
              </TouchableOpacity>
            </View>
          ));
        } else
          return (
            <Text style={{ margin: 10,fontSize:18 }}>
              {a}: {data[a]}
            </Text>
          );
      })}
    </View>
    </View>
   
     
    </ScrollView>
  );
};

export default ShipDetails;

const styles = StyleSheet.create({
  state:{width:"90%",borderRadius:10,backgroundColor:"#cef0d4",elevation:40}
});
