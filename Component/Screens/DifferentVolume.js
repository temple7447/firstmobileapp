import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet , Dimensions,Button,TouchableOpacity} from 'react-native';
import axios from "axios";
import Volume from "../Listing/volumes";

const Width  =  Dimensions.get('screen').width


const DifferentVolume = ({navigation})=>{

    const [sermon, setSermon] = useState([])
    const [subject, setSubject ] =  useState('')



  
    return(
        <View style={{flex:1, padding:20,width:Width}}>
            {/* <Text>Hello world</Text> */}
            <Volume title="VOLUME ONE" navigation={navigation}/>
            <Volume title= "VOLUME TWO" navigation={navigation}/>
        </View>
    )
}
export default DifferentVolume;