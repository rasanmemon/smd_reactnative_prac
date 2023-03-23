/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

const CountriesList = ({ navigation }: any) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://api.eatachi.co/api/country')
      .then(response => {
        return response.json();
      })
      .then(newCountries => {
        setCountries(newCountries);
      })
      .catch(err => Alert.alert('Error', err));
  }, []);

  const displayCountry = (itemObject: any) => {
    const { index, item } = itemObject;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Cities', { countryId: item.CountryId })
        }>
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
    <View style={{ flex: 1 }}>
      <FlatList data={countries} renderItem={displayCountry} />
    </View>
  );
};

export default CountriesList;
