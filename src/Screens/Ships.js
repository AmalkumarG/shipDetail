import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Ships = ({ data, navigation }) => {
  const stateIndicate=()=>{
    switch(data.item.active){
      case true:return{...styles.state,backgroundColor:"#d7f5dd"}
      case false:return{...styles.state,backgroundColor:"#f5d9d7"}
    }
  }
  return (
    <TouchableOpacity
      style={stateIndicate()}
      onPress={()=>navigation.navigate("Details",{data,navigation})}
    >
      {data.item.image != null ? (
        <Image
          source={{ uri: data.item.image }}
          resizeMode={"contain"}
          style={{ height: 180, width: 160, borderRadius: 10 }}
        />
      ) : (
        <View
          style={{
            height: 180,
            width: 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No image</Text>
        </View>
      )}
      <View style={{ padding: 10 }}>
        <Text style={{ width: 150 }}>Name: {data.item.name}</Text>
        <Text style={{ width: 150 }}>Home Port: {data.item.home_port}</Text>
        {data.item.active ? (
          <Text>Current status: Active</Text>
        ) : (
          <Text>Current status: InActive</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Ships;

const styles = StyleSheet.create({
  state:{
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 20,
    height: "auto",
    width: 160,
  }
});
