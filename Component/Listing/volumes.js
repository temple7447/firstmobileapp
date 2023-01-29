import React from "react";

import { View, Text,TouchableOpacity } from "react-native";

const Volume = ({navigation,title})=>{


    return(
        <View>
            <TouchableOpacity
            style={{backgroundColor:'blue', marginTop:4, borderRadius:10}}
            onPress={()=>{
                navigation.navigate('WEEKLY SERMON VOLUME 1', {name:"hello volume two"})
            }}>
                            <Text style={{textAlign:"center",fontSize:20, fontWeight:"bold",padding:10, color:"white", }}>{title}</Text>
             </TouchableOpacity>
        </View>
    )
}

export default Volume;