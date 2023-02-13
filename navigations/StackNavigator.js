import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StudentId from '../screens/StudentId';
import Home from '../screens/Home';
import CrFeed from '../screens/CrFeed';
import BottomTabNavigator from './BottomTabNavigator';
import CreateReport from "../screens/CreateReport";
import ReportCard from "../screens/ReportCard";
import ReportScreen from "../screens/ReportScreen";
import Search from "../screens/Search";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn"
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Stack.Screen name="StudentId" component={StudentId} />
      <Stack.Screen name="tab" component={BottomTabNavigator} />
      <Stack.Screen name="CrFeed" component={CrFeed} />
      <Stack.Screen name="CreateReport" component={CreateReport}/>
      <Stack.Screen name="ReportCard" component={ReportCard}/>
       <Stack.Screen name="ReportScreen" component={ReportScreen}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
