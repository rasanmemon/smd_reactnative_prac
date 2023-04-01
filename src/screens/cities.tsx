

import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

const CitiesList = ({ route, navigation }: any) => {
    const [cites, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const { countryId, countryName } = route.params;
        navigation.setOptions({ headerTitle: `Cities of ${countryName}` });
        fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`)
            .then(response => {
                return response.json();
            })
            .then(newCities => {
                setCities(newCities);

            })
            .catch(err => Alert.alert('Error', err))
            .finally(() => setLoading(false));
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
                            color: 'black',
                        }}>
                        {item.Name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {loading ? <ActivityIndicator /> :
                <FlatList data={cites} renderItem={displayCity} />
            }
        </View>
    );
};

export default CitiesList;
