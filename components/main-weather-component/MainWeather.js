import { Text, View, StyleSheet } from 'react-native';

const MainWeather = ({city, celcium, weatherCondition}) => (
  <View style={styles.container}>
    <Text style={styles.PlaceInfoStyle}>{city}</Text>
    <Text style={styles.celciumPlaceInfo}>{celcium}</Text>
    <Text style={styles.weatherCondition}>{weatherCondition}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 40
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
})

export default MainWeather;