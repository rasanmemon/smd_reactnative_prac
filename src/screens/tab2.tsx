import * as React from 'react';
import {Text, View, TextInput, Button, Alert, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function Tab2() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [inFinalYear, setInFinalYear] = React.useState(false);

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
      <TextInput
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={newText => setFirstName(newText)}
      />
      <TextInput
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={newText => setLastName(newText)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>In Final Year</Text>
        <Switch
          value={inFinalYear}
          onChange={() => setInFinalYear(!inFinalYear)}
        />
      </View>
      <Button title="Save" onPress={saveData} />
    </View>
  );
}
