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
  Alert,
  ScrollView,
} from 'react-native';
import ReportScreen from "./ReportScreen";
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sdetails: '',
      avg: "",
      avg2: "",
    };
  }

  componentDidMount() {
    console.log('test');
     //this.averagemarks()
    this.handleSearch(
      this.props.route.params.name,
      this.props.route.params.classGrade,
    );
  }
  handleSearch = async (name, classGrade) => {
    let searchkey = name.toUpperCase() + classGrade;
    console.log(searchkey);

    let studentname;
    await firebase
      .database()
      .ref('/reports/' + searchkey)
      .on('value', (snapshot) => {
        studentname = snapshot.val();
        this.setState({ sdetails: studentname });
      });
  };

  averagemarks =  ()  => {   
    var avg = (+(this.state.sdetails.engmarks) + 
      +(this.state.sdetails.mathmarks) +
      +(this.state.sdetails.sciencemarks )+
      +(this.state.sdetails.socialmarks) +
      +(this.state.sdetails.hindimarks) + 
      +(this.state.sdetails.telugumarks))/7;
  console.log("Average",avg)
      // avg2 = +(+(this.state.sdetails.engmarks)+
      // +(this.state.sdetails.mathmarks) +
      // +(this.state.sdetails.sciencemarks) +
      // +(this.state.sdetails.soci
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo2.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.titletext}>𝓐𝓬𝓱𝓲𝓮𝓿𝓮𝓻𝓼</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("StudentId")}>
            <Image 
            source ={require("../assets/arrowImg.png")}
            style ={{
                      width:70,
                      height:70,
                      marginLeft:-10,
                      marginTop:-40,
                      borderColor:"black", 
                    }}>
              </Image>
              </TouchableOpacity>
            </View>
          {!this.state.sdetails ? (
            <Text style={styles.noStudentText}>
              No Student Data Available. Please check the student name and class
              number
            </Text>
          ) : (
            <ScrollView>
              <View style={styles.cardContainer}>
                <View style={styles.name}>
                  <Text style={styles.reportInfo}>
                    𝙽𝚊𝚖𝚎: {this.state.sdetails.name}
                  </Text>
                </View>
                <View style={styles.classGrade}>
                  <Text style={styles.reportInfo}>
                    𝙲𝚕𝚊𝚜𝚜 : {this.state.sdetails.classGrade}
                  </Text>
                </View>

                <View>
                  <Text style={styles.fa1}>𝙵𝚊𝟷</Text>
                </View>
                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.state.sdetails.engmarks}
                  </Text>
                </View>

                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝙼𝚊𝚝𝚑 : {this.state.sdetails.mathmarks}
                  </Text>
                </View>

                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.state.sdetails.sciencemarks}
                  </Text>
                </View>

                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝚂𝚘𝚌𝚒𝚊𝚕 : {this.state.sdetails.socialmarks}
                  </Text>
                </View>

                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝙷𝚒𝚗𝚍𝚒: {this.state.sdetails.hindimarks}
                  </Text>
                </View>

                <View style={styles.sub1}>
                  <Text style={styles.reportInfo}>
                    𝚃𝚎𝚕𝚞𝚐𝚞: {this.state.sdetails.telugumarks}
                  </Text>
                </View>

                <View>
                  <Text style={styles.fa2}>𝙵𝚊2</Text>
                </View>

                <View style={styles.sub2}>
                  <Text style={styles.reportInfo}>
                    𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.state.sdetails.engmarks2}
                  </Text>
                </View>

                <View style={styles.math2}>
                  <Text style={styles.reportInfo}>
                    𝙼𝚊𝚝𝚑 : {this.state.sdetails.mathmarks2}
                  </Text>
                </View>

                <View style={styles.math2}>
                  <Text style={styles.reportInfo}>
                    𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.state.sdetails.sciencemarks2}
                  </Text>
                </View>

                <View style={styles.math2}>
                  <Text style={styles.reportInfo}>
                    𝚂𝚘𝚌𝚒𝚊𝚕 : {this.state.sdetails.socialmarks2}
                  </Text>
                </View>

                <View style={styles.math2}>
                  <Text style={styles.reportInfo}>
                    𝙷𝚒𝚗𝚍𝚒: {this.state.sdetails.hindimarks2}
                  </Text>
                </View>

                <View style={styles.math2}>
                  <Text style={styles.reportInfo}>
                    𝚃𝚎𝚕𝚞𝚐𝚞: {this.state.sdetails.telugumarks2}
                  </Text>
                </View>

                <View style={styles.others}>
                  <Text style={styles.attendenceText}>
                    𝙰𝚝𝚝𝚎𝚗𝚍𝚊𝚗𝚌𝚎 : {this.state.sdetails.attendence}
                  </Text>


                  <TouchableOpacity onPress={this.averagemarks} >

                  <Text style={styles.absentText}>
                    Click to know the average-
                    𝙵𝚊.𝙰𝚟𝚎𝚛𝚊𝚐𝚎 : 
                    {this.state.avg}                   
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}

          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: RFValue(500),
    height: RFValue(800),
    backgroundColor: '#F5F0BB',
    borderRadius: RFValue(20),
    marginTop: RFValue(10),
    //marginRight:RFValue(-100)
  },

  titletext: {
    textAlign: 'center',
    color: '#FFF7BC',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -90,
    marginLeft: 30,
  },
  iconImage: {
    width: 120,
    height: 120,
    marginRight: 70,
    marginTop: 10,
    marginLeft: -25,
  },
  name: {
    width: 160,
    height: 50,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 2,
    marginTop: 10,
  },
  reportInfo: {
    marginTop: 10,
    color: '#233E8B',
    fontSize: 15,
    fontWeight: 5,
  },
  classGrade: {
    width: 110,
    height: 50,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 200,
    marginTop: -48,
  },
  sub1: {
    width: 120,
    height: 49,
    borderWidth: 3,
    borderRadius: 20,
    // backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 20,
    marginTop: 10,
  },
  fa1: {
    marginTop: 20,
    color: '#73A9AD',
    fontSize: 20,
    fontWeight: 5,
    marginLeft: 50,
  },
  fa2: {
    marginTop: -380,
    color: '#73A9AD',
    fontSize: 20,
    fontWeight: 5,
    marginLeft: 220,
  },
  sub2: {
    width: 120,
    height: 49,
    borderWidth: 3,
    borderRadius: 20,
    // backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 170,
    marginTop: -343,
  },
  math2: {
    width: 120,
    height: 49,
    borderWidth: 3,
    borderRadius: 20,
    // backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 170,
    marginTop: 10,
  },
  others: {
    width: 270,
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 10,
    marginTop: 20,
  },
  attendenceText: {
    marginTop: 10,
    color: '#233E8B',
    fontSize: 15,
    fontWeight: 5,
  },
  absentText: {
    marginTop: 5,
    color: '#233E8B',
    fontSize: 15,
    fontWeight: 5,
  },
  noStudentText: {
    marginTop: 30,
    marginLeft: 40,
    color: 'red',
    fontSize: 22,
    fontFamily: 'comic sans ms',
  },
  arrowImg:{
  width:70,
  height:70,
  marginLeft:-90,
  marginTop:-10

}
});
