import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useAppContext } from '../context/appcontext';
const Tab = createBottomTabNavigator();

export default function Tab4() {
  const {user,counter,setCounter,updateCounter} = useAppContext();
  const addCounter=()=>{
    // setCounter(counter+1  );
    updateCounter(counter+1)
  }
  
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
    <Text style={{fontWeight:'bold',color: 'black',}}>value of Counter: {counter}</Text>
    <Button title='Add Counter' onPress={addCounter}/>
    </View>
  );
}
