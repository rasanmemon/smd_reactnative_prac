/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CitiesList from './src/screens/cities';
import CountriesList from './src/screens/countries';
const Stack = createNativeStackNavigator();
function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={CountriesList} />
        <Stack.Screen name="Cities" component={CitiesList} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
