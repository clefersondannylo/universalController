import React from 'react';
import {View,Text,TouchableOpacity,Stylesheet,Image} from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Cleferson</Text>
    </View>
  )
}

const styles = Stylesheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#0085ff'
  },
  text:{
    fontSize:16,
    color: '#fff'

  }
})