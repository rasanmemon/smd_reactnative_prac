/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

const CitiesList = ({ route }: any) => {
    const [cites, setCities] = useState([]);

    useEffect(() => {
        const { countryId } = route.params;

        fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`)
            .then(response => {
                return response.json();
            })
            .then(newCities => {
                setCities(newCities);
            })
            .catch(err => Alert.alert('Error', err));
    }, []);

    const displayCity = ({ item }: any) => {
        return (
            <TouchableOpacity>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        padding: 8,
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                        {item.Name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={cites} renderItem={displayCity} />
        </View>
    );
};

export default CitiesList;
