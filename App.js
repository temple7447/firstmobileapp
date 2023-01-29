import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet , SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHome from './Component/Screens/Home'
import Volumeone from './Component/Listing/Volumeone';
import axios from "axios";
import DetailSermon from "./Component/Screens/DetailSermon";
import DifferentVolume from "./Component/Screens/DifferentVolume";
import DEVOTIONAL from "./Component/Screens/DailyDevotional";
import GksMusic from "./Component/Screens/Music";
import Bible from "./Component/Screens/Bible";


const Stack =  createNativeStackNavigator()



function App() {
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
      <Stack.Screen 
      key={key}
      name={title}
      component={DetailSermon}
      />
    )
  })

  const Home = ()=>{
    return(
      <View style={styles.container}>
        <Text>HOME SCREN</Text>
      </View>
    )
  }
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='HOME' 
          component={MainHome}
          //  options={{header:()=>null}}
          />
         {Info}
       <Stack.Screen   name='SERMONS OF THE CHURCH' component={DifferentVolume} />
        <Stack.Screen   name='WEEKLY SERMON VOLUME 1' component={Volumeone}/>
        <Stack.Screen   name='DAILY DEVOTIONAL GUIDE' component={DEVOTIONAL}/>
        <Stack.Screen   name='MUSIC' component={GksMusic}/>
        <Stack.Screen   name='BIBLE' component={Bible}/>
       </Stack.Navigator>
    </NavigationContainer>
 
 
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  }
})





export default App;