/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountriesList from './countries';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="CountriesList" component={CountriesList} />
            <Tab.Screen name="Settings" component={Tab2} />
            <Tab.Screen name="Screen1" component={Tab3} />
            <Tab.Screen name="Screen2" component={Tab4} />
        </Tab.Navigator>
    );
}
