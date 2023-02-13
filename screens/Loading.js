import firebase from "firebase";
import React from "react";
import {text} from "react-native"
export default class LoadingScreen extends React.Component {
componentDidMount(){
firebase.auth().onAuthStateChanged((user)=> {
if(user){
  this.props.navigation.navigate("tab")
}
else{
this.props.navigation.replace("Home")
}
});
}
render() {
  return (
    <View>
      <Text>LoadingScreen</Text>
    </View>
  )
}
}