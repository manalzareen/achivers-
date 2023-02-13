/* import React, { Component } from 'react';
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
  TextInput,
  Alert
 } from 'react-native';
 import firebase from "firebase"
 import { RFValue } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class Home extends Component {
  constructor(){
    super()
    this.state={
     sdetails:""
    }
  }
  handleSearch = async (name,classGrade) =>{
      let searchkey=name.toUpperCase()+classGrade;
      console.log(searchkey)

      let studentname;
      await firebase
            .database()
            .ref( "/reports/"+searchkey)
            .on("value",(snapshot)=>{
              studentname=snapshot.val()
              this.setState({sdetails:studentname})
            })

  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg4.jpg')}
        style={styles.container}>
        <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>
        <SafeAreaView style={styles.androidView} />

        <Image
          source={require('../assets/logo2.png')}
          style={styles.iconImage}></Image>
        <KeyboardAwareScrollView>
        <View style={{ 
          backgroundColor: '#ECF9FF',
                  borderRadius: 25,
                  width: "60%",
                  height: "20%",
                  marginTop: 100,
                  marginLeft:90}}>
          <TextInput
            style={{width: "100%",
                    height: "100%",
                    borderWidth: 3,
                    borderRadius: 30,
                    borderColor: '#E6BA95',
                    marginLeft: -1,
                    padding:20,
                    fontSize:22}}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'𝚂𝚝𝚞𝚍𝚎𝚗𝚝 𝙽𝚊𝚖𝚎'}
            placeholderTextColor={'#E6BA95'}
            placeholderColor={'#FAAB78'}
    />
        </View>
        <View style={{ 
          backgroundColor: '#ECF9FF',
                  borderRadius: 25,
                  width: "60%",
                  height: "20%",
                  marginTop: 70,
                  marginLeft:90}}>
          <TextInput
            style={{width: "100%",
                    height: "100%",
                    borderWidth: 3,
                    backgroundColor:"#ECF9FF",
                    borderRadius: 30,
                    borderColor: '#E6BA95',
                    marginLeft: -1,
                    padding:20,
                    fontSize:22}}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'𝙲𝚕𝚊𝚜𝚜'}
            placeholderTextColor={'#E6BA95'}
            placeholderColor={'#FAAB78'}
    />
        
        
        <TouchableOpacity
          style={styles.routeButton} 
          onPress={()=>this.props.navigation.navigate("Search",{name:this.state.name,
          classGrade:this.state.classGrade
          
          })}>
          <Text style={styles.routeText}>𝚂𝚞𝚋𝚖𝚒𝚝</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
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
   iconImage: {
    width: "22%",
    height: "11%",
    marginRight: RFValue(70),
    marginTop:   RFValue(-80),
    marginLeft: RFValue(3),
    borderRadius:40
  },
  input1: {
    width:  "30%",
    height: "100%",
    backgroundcolor: '#F47C7C',
    color: 'white',
    borderWidth: RFValue(3),
    borderRadius: RFValue(25),
    borderColor: '#FFE69A',
    textAlign:"center",
    marginTop: RFValue(5),
     marginLeft:RFValue(1)
  },

  routeButton: {
    width: "80%",
    height: "70%",
    backgroundColor:"white",
    alignSelf:"center",
    marginTop: RFValue(50),
    borderRadius: RFValue(24),
    alignitems:"center",
    alignContent:"center"
  },
  routeText: {
    //marginTop: RFValue(17),
    marginLeft: RFValue(30),
    fontSize:RFValue(27),
    color: '#064663',
  },
});
 */
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
  TextInput,
  Alert
 } from 'react-native';
 import firebase from "firebase"
 import { RFValue } from 'react-native-responsive-fontsize';
export default class Home extends Component {
  constructor(){
    super()
    this.state={
     sdetails:""
    }
  }
  handleSearch = async (name,classGrade) =>{
      let searchkey=name.toUpperCase()+classGrade;
      console.log(searchkey)

      let studentname;
      await firebase
            .database()
            .ref( "/reports/"+searchkey)
            .on("value",(snapshot)=>{
              studentname=snapshot.val()
              this.setState({sdetails:studentname})
            })

  }

  



  render() {
    return (
      <ImageBackground
      source={require('../assets/bg4.jpg')}
      style={styles.container}>
      <SafeAreaView style={styles.androidView} />
      <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>

    <Image
        source={require('../assets/logo2.png')}
        style={styles.iconImage}></Image>
 
<View>
           <TouchableOpacity>
            <Image 
            source ={require("../assets/arrowImg.png")}
            style ={{
                      width:70,
                      height:70,
                      marginLeft:-5,
                      marginTop:-40,
                      borderColor:"black", 
                    }}>
              </Image>
              </TouchableOpacity>
            </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input1}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name'}
            placeholderTextColor={'white'}
            placeholderColor={'yellow'}
          />
        </View>
        {/*<View style={styles.textContainer}>
          <TextInput
            style={styles.input1}
            onChangeText={(classGrade) => this.setState({ classGrade})}
            placeholder={'Class'}
            placeholderTextColor={'white'}
            placeholderColor={'blue'}
          />
                  </View>
        
        <TouchableOpacity
          style={styles.routeButton} 
          onPress={()=>this.props.navigation.navigate("Search",{name:this.state.name,
          classGrade:this.state.classGrade
          
          })}>
          <Text style={styles.routeText}>𝓢𝓾𝓫𝓶𝓲𝓽</Text>
        </TouchableOpacity>*/}
       
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
   iconImage: {
    width: "22%",
    height: "11%",
    marginRight: RFValue(70),
    marginTop:   RFValue(-60),
    marginLeft: RFValue(3),
    borderRadius:40
  },
  input1: {
    width: "130%",
    height:"100%",
    backgroundcolor: '#F47C7C',
    color: 'white',
    borderWidth: RFValue(3),
    borderRadius: RFValue(25),
    borderColor: '#FFE69A',
    textAlign:"center",
    marginTop: 1,
     marginLeft:RFValue(-60)
  },
  textContainer: {
    width:"50%",
    height: "10%",
    marginTop: RFValue(80),
    marginLeft: RFValue(130),
    backgroundColor: "#F47C7C",
    borderRadius: RFValue(25),
    borderColor: '#FFE69A',
  },
  routeButton: {
    width: RFValue(170),
    height: RFValue(75),
    backgroundColor: '#FFF7BC',
    marginLeft: RFValue(140),
    marginRight:RFValue(130),
    marginTop: RFValue(30),
    borderRadius: RFValue(70),
  },
  routeText: {
    marginTop: RFValue(17),
    marginLeft: RFValue(30),
    fontSize:RFValue(25),
    color: '#E05D5D',
  },
});
