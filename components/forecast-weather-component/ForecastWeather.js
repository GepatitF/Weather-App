import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Forecast = ({minCelcium, maxCelcium}) => (
  <View style={styles.weekWeatherContainer}>
      <Text style={styles.weekWeatherInfo}>10-Day Forecast</Text>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
    <View style={styles.weekWeatherStatusContainer}>
      <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny {minCelcium} 'StatusBar' {maxCelcium}</Text></TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create ({
  weekWeatherContainer: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
    flexDirection: 'column'
  },
  weekWeatherInfo: {
    borderBottomColor: '#8E8E93',
    borderBottomWidth: 2,
    paddingBottom: 2,
    textAlign: 'left'
  },
  weekWeatherStatusContainer: {
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: '#BDBEC2',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  weekWeatherStatus: {
    marginTop: 5,
  },
})

export default Forecast