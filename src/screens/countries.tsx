/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
const CountriesList = ({ navigation }: any) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://api.eatachi.co/api/country')
      .then(response => {
        return response.json();
      })
      .then(newCountries => {
        setCountries(newCountries);


      })
      .catch(err => Alert.alert('Error', err))
      .finally(() => setLoading(false));

  }, []);

  const displayCountry = (itemObject: any) => {
    const { index, item } = itemObject;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Cities', { countryId: item.CountryId, countryName: item.Name })
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
  const countryIndex = () => {
    return (

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 8, backgroundColor: 'grey' }}>A</Text>
        <Text style={{ marginHorizontal: 8, backgroundColor: 'grey' }}>B</Text>
        <Text style={{ marginHorizontal: 8, backgroundColor: 'grey' }}>C</Text>
        <Text style={{ marginHorizontal: 8, backgroundColor: 'grey' }}>D</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {loading ? (<ActivityIndicator />) : (
        <View style={{ flex: 1 }}>
          {countryIndex()}
          <FlatList data={countries} renderItem={displayCountry} />
        </View>
      )
      }
    </View>
  );
};

export default CountriesList;
