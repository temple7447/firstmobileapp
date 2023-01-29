import React from "react";

import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const DetailSermon = ({route})=>{
    
    const { content} = route.params
  

    return(
        <View>
        <ScrollView>
           <Text style={{padding:20, textAlign:"justify"}}>{content}</Text>
           </ScrollView>
        </View>
    )
}

export default DetailSermon;