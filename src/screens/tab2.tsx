import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, Alert, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../context/appcontext';
const Tab = createBottomTabNavigator();

export default function Tab2() {
  const {counter} = useAppContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [inFinalYear, setInFinalYear] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('settings').then(settingsStr => {
      if (settingsStr) {
        const settings = JSON.parse(settingsStr);

        setFirstName(settings.firstName);
        setLastName(settings.lastName);
        setInFinalYear(settings.inFinalYear);
      }
    });
  }, []);

  const saveData = () => {
    Alert.alert('confirm ', ' are you want to save?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Ok',
        onPress: () => {
          AsyncStorage.setItem(
            'settings',
            JSON.stringify({firstName, lastName, inFinalYear}),
          );
        },
      },
    ]);
  };
  return (
    <View style={{padding: 16}}>
          <Text style={{fontWeight:'bold',color: 'black',}}>value of Counter {counter}</Text>
      <TextInput
        style={{color: 'black'}}
        placeholderTextColor="#483"
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={newText => setFirstName(newText)}
      />
      <TextInput
        style={{color: 'black'}}
        placeholderTextColor="#483"
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={newText => setLastName(newText)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'black'}}>In Final Year</Text>
        <Switch
          value={inFinalYear}
          onChange={() => setInFinalYear(!inFinalYear)}
        />
      </View>
      <Button title="Save" onPress={saveData} />
    </View>
  );
}
