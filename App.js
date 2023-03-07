import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useRef,useState} from 'react'
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
const App = () => {
  const ref=useRef()
  const [image,setImage]=useState()
  const TakeScreenshot=()=>{
    ref.current.capture().then(uri => {
      console.log("do something with ", uri);
      setImage(uri)
      alert(uri)
    });
  }
  const ShareImage=()=>{
      const option={
        url:image,
        message:'products Details',
        
    }
    Share.open(option)  
  }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ViewShot style={{width:'70%',height:300,}} ref={ref}>
    

     <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png'}} style={styles.image}/>

    </ViewShot>
    <TouchableOpacity onPress={()=>TakeScreenshot()} style={styles.TekeScreen}>
    
    
    <Text style={styles.Take_screen}>Teke ScreenShot</Text>
    </TouchableOpacity>
     
    <TouchableOpacity onPress={()=>ShareImage()} style={styles.TekeScreen}>
    <Text style={styles.Take_screen}> Share</Text>
    </TouchableOpacity>
    </View>

   
  )
}

export default App

const styles = StyleSheet.create({
  image:{
    width:'100%',height:300,
  },
  TekeScreen:{
    width:150,
    height:35,
    backgroundColor:'#CD5808',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  Take_screen:{
    color:'#fff',
  
  }
})