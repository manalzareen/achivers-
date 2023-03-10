  import React, { Component } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';

  export default class Home extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg4.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <Text style={styles.titletext}>π°ππππππππ</Text>

        <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>


          <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:"normal",marginTop:20, fontSize:30}}>π ππππππ ππ πππππππππ
</Text>
          <Image
            source={require('../assets/picture.webp')}
            style={styles.bookImage}></Image>

           <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:'bold',marginTop:20, marginLeft:-15, fontSize:20}}>"βLive as if you were to die tomorrow.</Text>

           <Text style={{alignSelf:'center' , color:'#FFFBEB',fontWeight:'bold',marginTop:10,fontSize:20}}>Learn as if you were to live forever.β </Text>
  
        <TouchableOpacity
        style={styles.getbox}
        onPress={() => this.props.navigation.navigate('StudentId')}>
          <Text style={styles.gettext}>Get Started </Text>
        </TouchableOpacity>
      
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
     flex:1,
     borderRadius:"3px",
     marginLeft:-1,
     marginTop:30

    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    titletext: {
      textAlign: 'center',
      color: '#FAAB78',
      fontSize: RFValue(40),
      fontWeight: 'bold',
      marginTop: RFValue(35),
      marginRight: RFValue(-60),
    },
    getbox:{
      width: 230,
      height:60,
      backgroundColor: '#FFFBEB',
      borderRadius: RFValue(70)  , 
      marginLeft:80,
      marginTop:20
    },
    gettext:{
      marginTop:  RFValue(10),
      marginLeft: RFValue(37),
      fontSize: RFValue(20),
      color: '#FAAB78',
      fontWeight:"bold"
    },
    iconImage: {
      width: "22%",
      height: "11%",
      marginRight: RFValue(70),
      marginTop:   RFValue(-60),
      marginLeft: RFValue(3),
      borderRadius:40
    },
    bookImage: {
      width: 250,
      height: 260,
      marginRight: RFValue(70),
      marginTop: RFValue(30),
      marginLeft: RFValue(60),
      borderRadius:90
    }
  });
