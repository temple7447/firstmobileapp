import React from 'react'
import { View,Text, StyleSheet,Dimensions,SafeAreaView , ScrollView,Image, ImageBackground, Pressable,TouchableOpacity, Alert} from 'react-native';
import image from '../../assets/gsk.webp'
import Icons from '../../assets/favicon.png'

const Width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const MainHome = ({navigation})=>{

const PressSermon =  ()=>{
    navigation.navigate('SERMONS OF THE CHURCH')
}
const PressDaily = ()=>{
    navigation.navigate('DAILY DEVOTIONAL GUIDE')
}

const PressMusic = ()=>{
    navigation.navigate('MUSIC')
}

const PressBible = ()=>{
    navigation.navigate('BIBLE')
}
const Headertitle = 'SERMONS OF THE CHURCH';
const DailYDevotional = "DAILY DEVOTIONAL GUIDE"
const GKSMUSIC = "MUSIC"
const Bible =  "BIBLE"
    return(
    <SafeAreaView style={style.container}>
        <Image source={image} style={{width:'100%',height:250, padding:10 }} resizeMode="stretch" />
        <ScrollView>
        <View >
            {/* sermons */}
            <TouchableOpacity style={style.box} onPress={PressSermon}>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />
                <View>
             <Text style={style.text}>{Headertitle}</Text>
             <Text style={{fontSize:10,textTransform:'capitalize', color:'white', textAlign:'center'}}>{Headertitle}</Text>

             </View>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />

            </TouchableOpacity>

            {/* daily Devotional Guide */}
            <TouchableOpacity style={style.box} onPress={PressDaily}>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />
                <View>
             <Text style={style.text}>{DailYDevotional}</Text>
             <Text style={{fontSize:10,textTransform:'capitalize', color:'white', textAlign:'center'}}>{DailYDevotional}</Text>

             </View>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />

            </TouchableOpacity>

            {/* GKS MUSIC */}
            <TouchableOpacity style={style.box} onPress={PressMusic}>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />
                <View>
             <Text style={style.text}>{GKSMUSIC}</Text>
             <Text style={{fontSize:10,textTransform:'capitalize', color:'white', textAlign:'center'}}>{GKSMUSIC}</Text>

             </View>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />

            </TouchableOpacity>


            <TouchableOpacity style={style.box} onPress={PressBible}>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />
                <View>
             <Text style={style.text}>{Bible}</Text>
             <Text style={{fontSize:10,textTransform:'capitalize', color:'white', textAlign:'center'}}>{Bible}</Text>

             </View>
            <Image source={Icons} style={{width:50, height:100}} resizeMode="contain" />

            </TouchableOpacity>
        </View>
   
        </ScrollView>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgb(100,0,0)",
     
    },
    box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:Width,
        backgroundColor:"rgb(100,0,0)",
        color:'white',
        // marginVertical:5,
        // borderRadius:20,
    
        // marginTop:20
        
    },
    
        text:{
            color:'white',
            fontWeight:"700",
            fontSize:20,
            textAlign:'left',
            
        }
    
  
    
})

export default MainHome;