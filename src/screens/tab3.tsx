import React, {SetStateAction, useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Maticons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function Tab3({navigation}:any) {
  // const navigation = useNavigation();
  const [profilePicture, setProfilePicture] = useState<string | null>();

  useEffect(() => {
    DeviceEventEmitter.addListener('event.pictureupdate', eventData =>
      updatePicture(eventData),
    );
    AsyncStorage.getItem('profilePicture').then(pic => {setProfilePicture(pic)})
      
    return () => {
      DeviceEventEmitter.removeAllListeners('event.pictureupdate');
    };
  }, []);

  const updatePicture = (pic: string) => {
    if(pic){

      setProfilePicture(pic);
      AsyncStorage.setItem('profilePicture', pic);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          
          navigation.navigate('TakePicture');
        }}
        style={{
          padding: 16,
        }}>
        {profilePicture ? (
          <Image
            source={{uri: 'data:image/png;base64,' + profilePicture}}
            resizeMode="contain"
            style={{height: 100, width: 100}}
          />
        ) : (
          <Maticons color={'black'} name="account-circle" size={100} />
        )}
      </TouchableOpacity>
    </View>
  );
}
