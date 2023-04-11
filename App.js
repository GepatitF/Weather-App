import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function App() {

  const cityWeather = [
    {
      city: 'Saint-Petersburg',
      weather: '18°C',
      weathercondition: 'Partly cloudy'
    }
  ]
  
  return (
    <View style={styles.container}>
      <FlatList style={styles.flatListContainer} data={cityWeather} renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.PlaceInfoStyle}>{item.city}</Text>
            <Text style={styles.celciumPlaceInfo}>{item.weather}</Text>
            <Text style={styles.weatherCondition}>{item.weathercondition}</Text>
          </View>
          <View style={styles.conditionExpectedInfo}>
            <Text style={styles.conditionInfoText}>Sunny conditions expected around 13:00</Text>
          </View>
        </View>
      )} > 
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  flatListContainer: {
    width: '100%'
  },
  PlaceInfoStyle: {
    fontSize: 20,
    marginTop: 60,
  },
  celciumPlaceInfo: {
    fontSize: 35,
  },
  weatherCondition: {
    fontSize: 15,
  },
  conditionExpectedInfo: {
    marginTop: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 60,
    backgroundColor: '#C7C7CC',
    borderRadius: 20
  },
  conditionInfoText: {
    textDecorationLine: 'underline',
  }
});
