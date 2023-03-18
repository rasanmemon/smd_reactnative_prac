/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const CountriesList = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    fetch('https://api.eatachi.co/api/' + 'country')
      .then(response => {
        return response.json();
      })
      .then(newCountries => {
        setCountries(newCountries);
        // console.log({countries});
      })
      .catch(err => {
        Alert.alert(err);
      });
  }, []);
  const displayCountries = (itemObject: any) => {
    const {index, item} = itemObject;
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('Cities of Country', item.Name)}>
        <View
          style={{
            backgroundColor: index % 2 === 0 ? 'blue' : 'green',
            height: 60,
            borderBottomWidth: 3,
            borderBottomColor: 'black',
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {item.Name}
          </Text>
          <Text
            style={{
              color: 'white',
            }}>
            {item.CurrencyName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{height: '100%', flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Countries of the World
      </Text>
      <FlatList data={countries} renderItem={displayCountries} />
    </View>
  );
};

// const styles = StyleSheet.create({});
export default CountriesList;
