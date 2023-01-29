import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet , Dimensions,Button,TouchableOpacity, ScrollView} from 'react-native';
import axios from "axios";

const Width  =  Dimensions.get('window').width


const Volumeone = ({navigation, route})=>{

    const {name} = route.params;

    console.log(name)
    const [sermon, setSermon] = useState([])
    const [subject, setSubject ] =  useState('')

    useEffect(()=>{
        axios.get(`https://general-nuyw.onrender.com/sermon`)

        .then((resp)=>{
             setSermon(resp.data)
           
            })
        .catch((err)=>console.log(err))
    
    
    },[])

 const Info = sermon.map((element)=>{
        const {key, content, title} = element;
        // setSubject(title)
        return(
         
            <View key={key}>
               
                <View style={{textAlign:"center",fontFamily:"sans-serif", fontWeight:700, marginVertical:10,borderRadius:20}}>
             
                <TouchableOpacity
            style={{backgroundColor:'blue', marginTop:4, borderRadius:10}}

                onPress={()=>{
                    navigation.navigate(
                        title
                        , {content})
                }}
                >
                  <Text style={{textAlign:"center",fontSize:20, fontWeight:"bold",padding:10, color:"white", }}>  {title}</Text>
                </TouchableOpacity>
            
                    {/* <Text>{title}</Text> */}
                    </View>
                   
            </View>
        
        )
    })


  
    return(
        <View style={{flex:1, padding:20,width:Width}}>
               <ScrollView>
            {Info}

            </ScrollView>
        </View>
    )
}
export default Volumeone;