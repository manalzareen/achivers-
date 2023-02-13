  import React, { Component } from 'react';
  import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ScrollView,
    TextInput,
    SearchBar
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
  import StoryCard from './ReportCard';

  import firebase from 'firebase';
  import { Ionicons, AntDesign } from '@expo/vector-icons';

  export default class CrFeed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myReports: [],
      loading: false,
      error: null,
      searchValue: "",
        
      };
    }
    renderItem = ({ item: mystory }) => {
      return <StoryCard story={mystory} navigation={this.props.navigation} />;
    };
    keyExtractor = (item, index) => index.toString();

    componentDidMount() {
      this.fetchReportCards();
      this._unsubcribe=this.props.navigation.addListener('focus',()=>{
        this.fetchReportCards();
      }); 
    }

    componentWillUnmount()
    {
      this._unsubcribe()
    }

    fetchReportCards = () => {
      firebase
        .database()
        .ref('/reports/')
        .on(
          'value',
          (snapshot) => {
            let myReports = [];
            if (snapshot.val()) {
              Object.keys(snapshot.val()).forEach(function (key) {
                myReports.push({
                  key: key,
                  value: snapshot.val()[key],
                });
              });
            }
            this.setState({ myReports: myReports });
          },
          function (errorObject) {
          // console.log('The read failed: ' + errorObject.code);
          }
        );
      //console.log(this.state.myReports);
    };
  Signout=()=>{
    firebase.auth().signOut().then(() => {
      this.props.navigation.replace("Home")
    }).catch((error) => {
      alert("not able to signout")
    });
  }
  
    
    

    render() {
      return (
        <ImageBackground
          source={require('../assets/bg1.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />

          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>

           <TouchableOpacity  style = {{ marginLeft:350, marginTop:-130}}onPress={this.Signout}>
           <AntDesign name="logout" size={40} color="#FFFBEB" />
                        </TouchableOpacity>
                
            <TouchableOpacity
           onPress={() => this.props.navigation.navigate('CreateReport')}
          style={styles.addReport}>
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity>
         
        <ScrollView style={styles.scroll}>
          
          <View style={styles.cardContainer}>
            {!this.state.myReports[0] ? (
              <View style={styles.noStories}>
                <Text style={styles.noStoriesText}>
                  No Report Cards Available
                </Text>
              </View>
            ) 
            : 
            (

              <View style={styles.cardContainer}>
                <FlatList
                  data={this.state.myReports}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                />
              </View>
            )}


          </View>
          </ScrollView>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    titletext: {
      textAlign: 'center',
      color: '#FAAB78',
      fontSize: RFValue(40),
      fontWeight: 'bold',
      marginTop: RFValue(45),
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
    noStories: {
      flex: 0.85,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noStoriesText: {
      color: 'black',
      fontSize: RFValue(25),
    },
    addReport:{
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 170,
    backgroundColor: '#FAAB78',
    borderRadius: 30,
    elevation: 8,
    },
    scroll:{
      marginVertical:140,
      paddingVertical:20
    },
    
  });
