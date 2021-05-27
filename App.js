import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function App() {
  function alertarGraficos(){
    alert(`graficos`)
  }
  function alertarHome(){
    alert(`home`)
  }
  function alertarPerfil(){
    alert(`perfil`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View>
        <Text style={styles.textTitle}>Welcome home,</Text>
        <Text style={styles.textName}>Cleferson Dannylo</Text>
        </View>
        <Image source={require('./src/assets/perfil.png')} style={styles.perfil}></Image>
      </View>
      <View style={styles.energy}>
        <View style={styles.energyLogo}></View>
        <View style={styles.energyText}>
          <View style={styles.textContainer}>
            <Text style={styles.energyTitle}>30.4 </Text>
            <Text style={styles.energyTitlePotencia}>kWh </Text>
          </View>
          
          <Text style={styles.energySubTitle}>Power usage today</Text>
        </View>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.navPlayer}>
          <View style={styles.navbar}>
            <Text onPress={alertarGraficos} style={styles.emojiStart}>📊</Text>
            <Text onPress={alertarHome} style={styles.emojiCenter}>🏠</Text>
            <Text onPress={alertarPerfil} style={styles.emojiEnd}>🧏</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    marginTop:30
  },
  header:{
    marginTop:20,
    width: '100%',
    backgroundColor:'#fff',
    height: 100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
    
  },
  textTitle: {
    fontSize: 16,
    color: 'rgba(0,0,0,.5)',
    marginLeft: 25,
   
  },
  textName: {
    fontSize: 25,
    color: 'rgba(0,0,0,1)',
    fontWeight:'bold',
    marginLeft: 25,
  },
  perfil:{
    height:70,
    width:70,
    borderRadius:35,
    marginRight: 35
  },
  energy:{
    width: '85%',
    height: 100,
    borderStyle:'solid' ,
    borderColor:'rgba(0,0,0,.5)',
    borderWidth:1,
    borderRadius: 15,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingLeft:30
  },
  energyLogo:{
    width: '20%',
    height: '50%',
 
  },
  energyText:{
    width: '70%',
    height: '50%',
    justifyContent:'center',
  },
  textContainer:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:-7
    
  },
  energyTitle:{
    fontSize:25,
    fontWeight:'bold',
    color: 'rgba(0,0,0,1)',
    marginLeft:10
  },
  energyTitlePotencia:{
    marginTop:4,
    fontSize:20,
    fontWeight:'bold',
    color: 'rgba(0,0,0,1)',
  },
  energySubTitle:{
    fontSize:16,
    color: 'rgba(0,0,0, .5)',
    fontWeight:'bold',
    marginLeft:10,
    marginTop:-5
  },
    navContainer:{  
      width: '100%',
      backgroundColor:'#fff',
      height: '73%',
      justifyContent:'flex-end'
  },
  navPlayer:{
    width: '100%',
    height: '30%',
    backgroundColor:'rgba(0,0,0,.8)',
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    justifyContent:`flex-end`
    
},

    navbar:{
    width: '100%',
    height: 70,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:10,
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    backgroundColor:`#fff`
  },
    emojiStart:{
      fontSize:25,

  },
    emojiCenter:{
    paddingHorizontal:10,
    fontSize:25,
  },
    emojiEnd:{
      fontSize:25,
    }

});
