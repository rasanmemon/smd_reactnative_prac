import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Maticons from 'react-native-vector-icons/MaterialIcons';

import CountriesList from './countries';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const MyHeader = ({navigation, route, options}: any) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={{
          uri: 'https://khi.nu.edu.pk/wp-content/uploads/2022/05/FAST-NU-logo.png',
        }}
        resizeMode="contain"
        style={{width: 140, height: 40}}
      />
      <Maticons name="menu" size={24} color={'black'} />
    </View>
  );
};
export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props: any) => {
          return <MyHeader {...props} />;
        },
      }}>
      <Tab.Screen
        name="home"
        component={CountriesList}
        options={{
          tabBarIcon: tabinfo => {
            return (
              <Maticons
                name="home"
                size={24}
                color={tabinfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Tab2}
        options={{
          tabBarIcon: tabinfo => {
            return (
              <Maticons
                name="settings"
                size={24}
                color={tabinfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Tab3}
        options={{
          tabBarIconStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Tab4}
        options={{
          tabBarIconStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
}
