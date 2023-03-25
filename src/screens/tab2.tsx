/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Tab2() {
    return (
        <View>
            <Text>home</Text>
        </View>
    );
}
