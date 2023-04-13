import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';

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
          <View style={styles.conditionExpectedInfoContainer}>
            <Text style={styles.conditionInfoText}>Sunny conditions expected around 13:00</Text>
            <View style={styles.rightNowWeatherContainer}>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
              <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo, styles.timeWeatherInfoLastChild]}>
                <Text style={styles.infoTimeWeatherContainer}>Now</Text>
                <Text style={styles.cloudy}>Cloudy</Text>
                <Text style={styles.infoTimeWeatherContainer}>18°C</Text>
              </View>
            </View>
          </View>
            <View style={styles.weekWeatherContainer}>
              <Text style={styles.weekWeatherInfo}>10-Day Forecast</Text>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
              <View style={styles.weekWeatherStatusContainer}>
                <TouchableOpacity style={styles.weekWeatherStatus}><Text>Today Sunny 14°C 'StatusBar' 21°C</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.airQualityStatusContainer}>
              <View>
                <Text>Air quality</Text>
                <Text style={styles.airRatingQualityText}>Good</Text>
                <Text>Air quality is better than yetserday at about this time</Text>
              </View>
              <View>
                <Text style={styles.airQualityStatusBar}>'StatusBar'</Text>
              </View>
            </View>
            <View style={styles.precipitationContainer}>
              <Text>Precipitation</Text>
              <View style={styles.precipitationImageContainer}>
                <Image style={styles.precipitationImage} source={require('./assets/location.png')} />
              </View>
            </View>
            <View style={styles.panelContainer}>
              <View style={[styles.panel, styles.panelFirstChild]}>
                <Text>Index</Text>
                <Text>0</Text>
                <Text>Low</Text>
                <Text>'StatusBar'</Text>
                <Text>Use sun protection</Text>
                <Text>unilt 18:00</Text>
              </View>
              <View style={styles.panel}>
                <Text>Sunrise</Text>
                <Text>5:46 AM</Text>
                <Text>'StatusBar'</Text>
                <Text>Sunrise: 07:32</Text>
              </View>
            </View>
            <View style={styles.panelContainer}>
              <View style={[styles.panel, styles.panelFirstChild]}>
                <Text>Index</Text>
                <Text>0</Text>
                <Text>Low</Text>
                <Text>'StatusBar'</Text>
                <Text>Use sun protection</Text>
                <Text>unilt 18:00</Text>
              </View>
              <View style={styles.panel}>
                <Text>Sunrise</Text>
                <Text>5:46 AM</Text>
                <Text>'StatusBar'</Text>
                <Text>Sunrise: 07:32</Text>
              </View>
            </View>
            <View style={styles.panelContainer}>
              <View style={[styles.panel, styles.panelFirstChild]}>
                <Text>Index</Text>
                <Text>0</Text>
                <Text>Low</Text>
                <Text>'StatusBar'</Text>
                <Text>Use sun protection</Text>
                <Text>unilt 18:00</Text>
              </View>
              <View style={styles.panel}>
                <Text>Sunrise</Text>
                <Text>5:46 AM</Text>
                <Text>'StatusBar'</Text>
                <Text>Sunrise: 07:32</Text>
              </View>
            </View>
            <View style={styles.panelContainer}>
              <View style={[styles.panel, styles.panelFirstChild]}>
                <Text>Index</Text>
                <Text>0</Text>
                <Text>Low</Text>
                <Text>'StatusBar'</Text>
                <Text>Use sun protection</Text>
                <Text>unilt 18:00</Text>
              </View>
              <View style={styles.panel}>
                <Text>Sunrise</Text>
                <Text>5:46 AM</Text>
                <Text>'StatusBar'</Text>
                <Text>Sunrise: 07:32</Text>
              </View>
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
    width: '100%',
    paddingTop: 40
  },
  flatListContainer: {
    width: '100%',
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
  conditionExpectedInfoContainer: {
    marginTop: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%'
  },
  cloudy: {
    fontSize: 12
  },
  conditionInfoText: {
    borderBottomColor: '#8E8E93',
    borderBottomWidth: 2,
    paddingBottom: 2,
    textAlign: 'center'
  },
  rightNowWeatherContainer: {
    flexDirection: 'row',
  },
  timeWeatherInfo: {
    marginTop: 10,
    marginRight: 9,
    borderRadius: 5,
    backgroundColor: '#BDBEC2',
    padding: 5,
  },
  timeWeatherInfoLastChild: {
    marginRight: 0,
  },
  timeWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '15%',
    marginLeft: 3
  },
  infoTimeWeatherContainer: {
    textAlign: 'center'
  },
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
  airQualityStatusContainer: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
  },
  airQualityStatusBar: {
    paddingTop: 25,
  },
  precipitationContainer: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
  },
  precipitationImageContainer: {
    alignItems: 'center'
  },
  precipitationImage: {
    borderRadius: 20,
    marginTop: 10,
  },
  airRatingQualityText: {
    fontSize: 20
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
  },
  panel: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    width: '49%',
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
  },
  panelFirstChild: {
    marginRight: 5
  },
});
